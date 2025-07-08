import React, { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Vadodara",
    condition: "Partly Cloudy",
    country: "India",
    feelsLike: 32.9,
    humidity: 65,
    icon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
    localTime: "2025-07-08 17:58",
    temp: 29.4,
    uv: 1.1,
    windDir: "SSW",
    windSpeed: 27.7,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="weather-app-container">
      <h1 className="app-title">Weather App By Yash Parmar</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
