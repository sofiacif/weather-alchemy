import React from "react";

export default function Search() {
  return (
    <div>
      <div className="d-flex mt-5 justify-content-center">
        <input
          type="text"
          placeholder="enter a city"
          className="search-box"
        ></input>

        <input type="submit" value="search" className="search-button"></input>
      </div>
    </div>
  );
}
