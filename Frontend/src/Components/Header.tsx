import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import "./Home.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="Header">
      <div className="navbar">
        <Link to="/quiz">QUIZ</Link>
        <Link to="/">HOME</Link>
        <button className="btn">GENRES</button>
        <button className="btn">YEAR</button>
        <button className="btn">RATING</button>
        <button className="btn">ACTOR</button>
        <label>
          <FontAwesomeIcon icon={faSearchPlus} />
          <input type="text" placeholder="Search.." name="search" />
        </label>
      </div>
    </div>
  );
}

export default Header;
