import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [units, setUnits] = useState("metric");
  const [weatherImg, setWeatherImg] = useState(
    "https://images.unsplash.com/photo-1639259237608-5745bed5ffc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
  );
  const [weatherIcon, setWeatherIcon] = useState("src/icons/air.svg");
  const key = "00bfe09c6fd36ft82e7e4a384o4ba0e8";
  const api = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${units}`;

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
  }
  function updateUnits(event) {
    event.preventDefault();
    setUnits("imperial");
    console.log(units);
  }
  function updateWeather(response) {
    const weatherIcon = response.data.condition.icon;
    const imgMapping = {
      "clear-sky-day": {
        imgLink:
          "https://images.unsplash.com/photo-1639259237608-5745bed5ffc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/air.svg",
      },
      "clear-sky-night": {
        imgLink:
          "https://images.unsplash.com/photo-1675787995181-65b258d592ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        iconLink: "src/icons/air.svg",
      },
      "few-clouds-day": {
        imgLink:
          "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/air.svg",
      },
      "few-clouds-night": {
        imgLink:
          "https://images.unsplash.com/photo-1510650499-08d11de6119e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "",
      },
      "scattered-clouds-day": {
        imgLink:
          "https://images.unsplash.com/photo-1542297180-c9b41fab5ee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80",
        iconLink: "src/icons/air.svg",
      },
      "scattered-clouds-night": {
        imgLink:
          "https://images.unsplash.com/photo-1494253188410-ff0cdea5499e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/air.svg",
      },
      "broken-clouds-day": {
        imgLink:
          "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        iconLink: "src/icons/air.svg",
      },
      "broken-clouds-night": {
        imgLink:
          "https://images.unsplash.com/photo-1514912885225-5c9ec8507d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/air.svg",
      },
      "shower-rain-day": {
        imgLink:
          "https://images.unsplash.com/photo-1527766833261-b09c3163a791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx",
        iconLink: "src/icons/water.svg",
      },
      "shower-rain-night": {
        imgLink:
          "https://images.unsplash.com/photo-1548232979-6c557ee14752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
        iconLink: "src/icons/water.svg",
      },
      "rain-day": {
        imgLink:
          "https://images.unsplash.com/photo-1603262439120-3e17d13bab3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/water.svg",
      },
      "rain-night": {
        imgLink:
          "https://images.unsplash.com/photo-1509261048498-184c7170dbf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/water.svg",
      },
      "thunderstorm-day": {
        imgLink:
          "https://images.unsplash.com/photo-1643119222678-131a90659e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/fire.svg",
      },
      "thunderstorm-night": {
        imgLink:
          "https://images.unsplash.com/photo-1482005253821-5d6a2c685879?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2738&q=80",
        iconLink: "src/icons/fire.svg",
      },
      "snow-day": {
        imgLink:
          "https://images.unsplash.com/photo-1557413603-d39c9484a980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80",
        iconLink: "src/icons/earth.svg",
      },
      "snow-night": {
        imgLink:
          "https://images.unsplash.com/photo-1560567322-911e17465686?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/earth.svg",
      },
      "mist-day": {
        imgLink:
          "https://images.unsplash.com/photo-1492485215466-dae7198c66c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/earth.svg",
      },
      "mist-night": {
        imgLink:
          "https://images.unsplash.com/photo-1551639325-0f0d88fc2413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        iconLink: "src/icons/earth.svg",
      },
    };
    const { imgLink, iconLink } = imgMapping[weatherIcon];
    setWeatherImg(imgLink);
    setWeatherIcon(iconLink);
    console.log(response.data.condition.icon);
  }
  function displayWeather(event) {
    event.preventDefault();
    axios.get(api).then(updateWeather);
  }

  return (
    <div style={{ minHeight: "100%" }}>
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
      <p className="text-center mt-4 metrics">
        <a href="/">METRIC</a> /{" "}
        <a href="/" onClick={updateUnits}>
          IMPERIAL
        </a>
      </p>
      <div
        className="bg-image d-flex align-items-center justify-content-center height-full"
        style={{ backgroundImage: `url(${weatherImg})` }}
        id="weather-img-bg"
      >
        <img src={weatherIcon} alt="weather-icon" id="weather-icon" />
      </div>
    </div>
  );
}
