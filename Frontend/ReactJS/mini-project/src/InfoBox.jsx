import React from "react";
import "./InfoBox.css";

const InfoBox = ({ info }) => {
  return (
    <div className="info-glass-card">
      <div className="weather-main">
        <div className="weather-icon">
          <img src={info.icon} alt={info.condition} />
        </div>
        <div className="weather-data">
          <h2>{info.temp}°C</h2>
          <p className="condition">{info.condition}</p>
          <p className="feels">Feels like {info.feelsLike}°C</p>
        </div>
      </div>

      <div className="weather-meta">
        <p>
          📍{" "}
          <strong>
            {info.city}, {info.country}
          </strong>
        </p>
        <p>🕒 {info.localTime}</p>
        <p>💧 Humidity: {info.humidity}%</p>
        <p>
          🌬️ Wind: {info.windSpeed} km/h ({info.windDir})
        </p>
        <p>🔆 UV Index: {info.uv}</p>
      </div>
    </div>
  );
};

export default InfoBox;
