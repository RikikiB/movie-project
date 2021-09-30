import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.tsx";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [nowplaying, setNowplaying] = useState({ nowplaying: [] });
  const [rating, setRating] = useState({ results: [] });
  const [drop, setDrop] = useState(false);
  const [open, setOpen] = useState(false);

  const tmdb_api_key = "795cf19c05b9ff607f4b7206a0a4abd3";

  useEffect(() => {
    const URL_api = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdb_api_key}&language=en-US&page=1&region=US`;
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setNowplaying(response);
      });
  }, []);

  useEffect(() => {
    const URL_api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdb_api_key}&language=en-US&page=1&region=us`;
    fetch(URL_api)
      .then((response) => response.json())
      .then((response) => {
        setRating(response);
      });
  }, []);

  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/quizpage"> Movie Quiz</Link>

      <div className="nowplayingbox">
        <button className="moviesnowplaying" onClick={() => setDrop(!drop)}>
          Now Playing
        </button>
        {drop && (
          <div className="listholder">
            {nowplaying.results.map(function (movie) {
              return (
                <Link
                  key={movie.id}
                  to={`/detail/${movie.id}`}
                  onClick={() => setDrop(false)}
                >
                  {movie.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <div className="ratebox">
        <button className="ratinglist" onClick={() => setOpen(!open)}>
          Top Rated
        </button>
        {open && (
          <div className="listholder">
            {rating.results.map(function (movie) {
              return (
                <Link
                  key={movie.id}
                  to={`/detail/${movie.id}`}
                  onClick={() => setOpen(false)}
                >
                  {movie.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <label>
        <input
          className="nav-search"
          type="text"
          placeholder="Search.."
          name="search"
        />
        <FontAwesomeIcon icon={faSearchPlus} />
      </label>
    </div>
  );
}

export default Navbar;
