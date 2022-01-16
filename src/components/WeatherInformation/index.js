import React from "react";
import { WeatherCard } from "..";
import "../WeatherCard/weathercard.style.css";

const WeatherInformation = ({ data, removeCity }) => {
  return (
    <div className="weather-info">
      {data.map((record, index) => {
        return (
          <div className="weather-info-content">
            <WeatherCard removeCity={removeCity} key={index} city={record} />
          </div>
        );
      })}
    </div>
  );
};

export default WeatherInformation;
