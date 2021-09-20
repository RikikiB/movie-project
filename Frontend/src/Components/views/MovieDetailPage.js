import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.scss";

function MovieDetailPage(props) {
  const tmdb_api_key = "795cf19c05b9ff607f4b7206a0a4abd3";
  const { movieId } = useParams();
  const [movie, setMovie] = useState({ genres: [] });
  const [show, setShow] = useState(false);
  const [crews, setCrews] = useState([]);
  const [apiConfig, setApiConfig] = useState(null);

  useEffect(() => {
    const config_url = `https://api.themoviedb.org/3/configuration?api_key=${tmdb_api_key}`;
    fetch(config_url)
      .then((res) => res.json())
      .then((config) => {
        setApiConfig(config);
      });
  }, []);

  useEffect(() => {
    if (!apiConfig) return;

    const URL_api = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdb_api_key}`;
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
        console.log(response);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${tmdb_api_key}`
    )
      .then((res) => res.json())
      .then((res) => setCrews(res.cast));
  }, [apiConfig, movieId]);

  console.log(apiConfig);

  return (
    <div className="MovieDetailPage">
      <div className="containercard">
        <div className="MoviePhoto">
          <div className="img-main">
            <img
              src={`${apiConfig?.images?.base_url}/w185/${movie?.poster_path}`}
              alt={`${movie?.title} poster`}
            />
          </div>
        </div>
        <div className="detailsinformation">
          <div className="title">{movie.title}</div>
          <div className="overview">{movie.overview}</div>

          <div className="detail">
            <div className="detail-text">Title: {movie.original_title}</div>
            <div className="detail-text">
              Release Date: {movie.release_date}
            </div>
            <div className="detail-text">Runtime: {movie.runtime} Minutes</div>
            <div className="detail-text">
              genres:
              {movie.genres
                .map(function (genre) {
                  return genre.name;
                })
                .join(" ")}
            </div>
          </div>
        </div>
        <div className="actors">
          <button className="actor-view-btn" onClick={() => setShow(!show)}>
            Actor view
          </button>
          <div className={show ? "" : "hidden"}>
            {/* <h1>{movie.poster_path}</h1> */}

            {/* TODO: Grid cards for crews */}
            <div className="actorPhoto">
              {crews
                .filter((c) => c?.profile_path)
                .slice(0, 12)
                .map((item) => {
                  return (
                    <img
                      key={item.profile_path}
                      src={`https://www.themoviedb.org/t/p/w276_and_h350_face${item.profile_path}`}
                      alt="actors"
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
