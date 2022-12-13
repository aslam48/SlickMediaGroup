import React from "react";
import "../../App.css";


const MovieItem = ({ item }) => {
  function truncateText(string, maxLength = 55) {
    if (!string) return "";
    if (string.length > maxLength)
      return string.substring(0, maxLength) + " ...";
    return string;
  }
  return (
    <div className="card-inner">
      <img src={item.Poster} alt="movie" />

      <div className="card-overlay-container">
        {/* <h1>{item.Type}</h1> */}
        <ul>
          <li>
            <strong>year:</strong> {item.Year}
          </li>
          <li>
            <strong>movie name:</strong> {truncateText(item.Title)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieItem;
