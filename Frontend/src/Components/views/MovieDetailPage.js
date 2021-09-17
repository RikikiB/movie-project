import React from "react";
import { useEffect, useState } from "react";
import { Descriptions, DescriptionItem } from "antd";
import "./MovieDetailPage.scss";

function MovieDetailPage(props) {
  // const omdb_api_key = "65b23a68";
  // const URL_api = `http://www.omdbapi.com/?i=${movieId}&apikey=${omdb_api_key}`;
  const omdb_api_key = "795cf19c05b9ff607f4b7206a0a4abd3";
  const movieId = "tt3896198";

  const URL_api = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${omdb_api_key}`;

  const [movie, setMovie] = useState({ genres: [] });
  const [show, setShow] = useState(false);
  const [crews, setCrews] = useState([]);

  useEffect(() => {
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
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
      <div className="grid">
        <div>Title: {movie.original_title}</div>
        <div>Release Date: {movie.release_date}</div>
      </div>
      {/* <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title : ">
          {movie.original_title}
        </Descriptions.Item>
        <Descriptions.Item label="release_date : ">
          {movie.release_date}
        </Descriptions.Item>

        <Descriptions.Item label="vote_count : ">
          {movie.vote_count}
        </Descriptions.Item>
        <Descriptions.Item label="runtime : ">
          {movie.runtime}
        </Descriptions.Item>
        <Descriptions.Item label="vote_average : ">
          {movie.vote_average}
        </Descriptions.Item>
        <Descriptions.Item label="popularity : ">
          {movie.popularity}
        </Descriptions.Item>
        <Descriptions.Item label="revenue : ">
          {movie.revenue}
        </Descriptions.Item>
        <Descriptions.Item label="status: ">{movie.status}</Descriptions.Item>

        <Descriptions.Item label="genres : ">
          {movie.genres
            .map(function (typ) {
              return typ.name;
            })
            .join(" ")}
        </Descriptions.Item>
      </Descriptions> */}
      <button className="actor-view" onClick={() => setShow(!show)}>
        Actor view
      </button>
      <div className={show ? "" : "hidden"}>
        <h1>{movie.poster_path}</h1>
      </div>
      {/* Grid cars for crews */}
      {/* <div className="show_pic_actor">
        {crews && crews.map(function(crew)
         {return image={crew.poster_path}})}
      </div> */}
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
