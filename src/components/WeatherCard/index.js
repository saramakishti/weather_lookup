import React from "react";
import "./weathercard.style.css";

const WeatherCard = ({ city, removeCity }) => {
  const { main, weather, name, sys } = city;

  return (
    <div className="weather-card">
      <div className="city-title">
        <span>{name}</span>
        <span className="country-code">{sys.country}</span>
        <span
          title="Remove City Info"
          className="remove-icon"
          onClick={() => removeCity(name)}
        >
          {" "}
          x{" "}
        </span>
      </div>
      <div className="weather-temperature">
        {Math.round(main.temp)}
        <sup>°C</sup>
      </div>
      <div className="weather-icon"></div>
      <div className="weather-description">
        {weather[0].description.toUpperCase()}
      </div>
    </div>
  );
};

export default WeatherCard;
