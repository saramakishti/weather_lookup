import React, { useState } from "react";
//Utils
import axios from "axios";
import "./search.style.css";

const WeatherAPIKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

const SearchCity = ({ onCityDataUpdate, updateErrorMessage }) => {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const updateInput = (event) => {
    setErrorMessage(null);
    setSearchInput(event.target.value);
  };

  const searchByCity = () => {
    axios
      .get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: searchInput,
          appid: WeatherAPIKey,
          units: "metric",
        },
      })
      .then((response) => {
        onCityDataUpdate(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      })
      .finally(() => {
        setSearchInput("");
      });
  };

  return (
    <>
      <div className="search-container">
        <input
          value={searchInput}
          onChange={updateInput}
          className="search-input"
          placeholder="Search for a city"
        ></input>
        <button className="search-button" onClick={searchByCity}>
          Submit
        </button>
      </div>
      {errorMessage && (
        <div className="error-message">{errorMessage.toUpperCase()}</div>
      )}
    </>
  );
};

export default SearchCity;
