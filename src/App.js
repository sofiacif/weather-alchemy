import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  const [weatherImg, setWeatherImg] = useState(
    "https://images.unsplash.com/photo-1639259237608-5745bed5ffc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
  );
  function handleBackgroundImageChange(image) {
    setWeatherImg(image);
  }
  return (
    <div
      className="weatherbg"
      style={{ backgroundImage: `url(${weatherImg})` }}
    >
      <div className="d-flex justify-content-center">
        <img src={logo} className="App-logo text-center mt-5" alt="logo" />
      </div>
      <div className="mt-5">
        <h1 className="text-center main-color">WEATHER ALCHEMY</h1>
        <h2>Unleash the Elements in Your Forecast</h2>
      </div>
      <Search onBackgroundImageChange={handleBackgroundImageChange} />
    </div>
  );
}

export default App;
