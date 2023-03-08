import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("metric");
  const api = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${units}`;
  const key = "00bfe09c6fd36ft82e7e4a384o4ba0e8";
  //
  //user writes city on search box
  // the value of the input is set to the state
  // the state is displayed when the user clicks on the search button
  // create units use state

  function updateCity(event) {
    setCity(event.target.value);
  }
  function updateUnits(event) {
    setUnits("imperial");
  }
  function displayWeather(event) {
    event.preventDefault();
    axios.get(api).then(updateCity);
  }

  return (
    <div>
      <div className="d-flex mt-5 justify-content-center">
        <input
          type="text"
          placeholder="enter a city"
          className="search-box"
          onChange={updateCity}
        ></input>

        <input
          type="submit"
          value="search"
          className="search-button"
          onSubmit={displayWeather}
        ></input>
      </div>
      <p>
        <a href="/">Metric</a> /{" "}
        <a href="/" onClick={updateUnits}>
          imperial
        </a>
      </p>
    </div>
  );
}
