import React from "react";
import { useEffect, useState } from "react";
import { Descriptions, Badge } from "antd";

function MovieDetailPage(props) {
  const omdb_api_key = "65b23a68";
  const movieId = "tt3896198";
  // const URL_api = `http://www.omdbapi.com/?i=${movieId}&apikey=${omdb_api_key}`;
  const URL_api =
    "https://api.themoviedb.org/3/movie/550?api_key=795cf19c05b9ff607f4b7206a0a4abd3";

  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState(false);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
        console.log(response);

        fetch(
          `http://www.omdbapi.com/?i=${movieId}/credits?&apikey=${omdb_api_key}`
        )
          .then((response) => response.json())
          .then((respose) => setCrew(response));
      });
  }, []);
  return (
    <div>
      <Descriptions title="Movie Info" bordered>
        <Descriptions.Item label="Title : ">{movie.Title}</Descriptions.Item>
        <Descriptions.Item label="Director : ">
          {movie.Director}
        </Descriptions.Item>
        <Descriptions.Item label="imdbRating : ">
          {movie.imdbRating}
        </Descriptions.Item>
        <Descriptions.Item label="Genre : ">{movie.Genre}</Descriptions.Item>
        <Descriptions.Item label="Country : ">
          {movie.Country}
        </Descriptions.Item>
        <Descriptions.Item label="imdbVotes : ">
          {movie.imdbVotes}
        </Descriptions.Item>
        <Descriptions.Item label="Writer : ">{movie.Writer}</Descriptions.Item>
        <Descriptions.Item label="Runtime : ">
          {movie.Runtime}
        </Descriptions.Item>
        <Descriptions.Item label="Released : ">
          {movie.Released}
        </Descriptions.Item>
      </Descriptions>
      <button className="actor-view" onClick={() => setShow(!show)}>
        Actor view
      </button>
      <div className={show ? "" : "hidden"}>
        <h1>{movie.Actors}</h1>
      </div>
    </div>
  );
}

export default MovieDetailPage;
