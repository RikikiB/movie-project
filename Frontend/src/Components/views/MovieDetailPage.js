import React from "react";
import { useEffect, useState } from "react";
import "./MovieDetailPage.scss";

function MovieDetailPage(props) {
  const omdb_api_key = "795cf19c05b9ff607f4b7206a0a4abd3";
  const movieId = "tt3896198";
  // const movieId = props.match.param.movieId;

  const URL_api = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${omdb_api_key}`;

  const [movie, setMovie] = useState({ genres: [] });
  const [show, setShow] = useState(false);
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
        console.log(response);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${omdb_api_key}`
    )
      .then((res) => res.json())
      .then((res) => setCrews(res.cast));
  }, [URL_api]);

  console.log(crews);

  return (
    <div className="MovieDetailPage">
      <div className="grid_detail">
        <div>Title : {movie.original_title}</div>
        <div>Release Date : {movie.release_date}</div>
        <div>runtime :{movie.runtime}</div>

        {/* <div>vout_count :{movie.vote_count}</div> */}
        {/* <div>vote_average : {movie.vote_average}</div>
        <div>popularity :{movie.popularity}</div>
        <div> revenue :{movie.revenue}</div>
        <div>status :{movie.status}</div> */}
        <div>
          genres :
          {movie.genres
            .map(function (typ) {
              return typ.name;
            })
            .join(" ")}
        </div>
      </div>

      <button className="actor-view" onClick={() => setShow(!show)}>
        Actor view
      </button>
      <div className={show ? "" : "hidden"}>
        <h1>{movie.poster_path}</h1>
      </div>
      {/* Grid cars for crews */}

      {crews.map((item) => {
        return (
          <img
            src={`https://www.themoviedb.org/t/p/w276_and_h350_face${item.profile_path}`}
            alt="actors"
          />
        );
      })}
    </div>
  );
}

export default MovieDetailPage;
