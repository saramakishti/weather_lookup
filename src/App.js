import React, { useState } from "react";
//Custom Components
import { Container, SearchCity, Title, WeatherInformation } from "./components";
//Styling CSS
import "./index.css";

const App = () => {
  const [cityData, setCityData] = useState([
    {
      coord: {
        lon: 9.1895,
        lat: 45.4643,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      base: "stations",
      main: {
        temp: 8.61,
        feels_like: 8.25,
        temp_min: 6.91,
        temp_max: 10.7,
        pressure: 1021,
        humidity: 61,
      },
      visibility: 10000,
      wind: {
        speed: 1.34,
        deg: 318,
        gust: 2.68,
      },
      clouds: {
        all: 0,
      },
      dt: 1642349804,
      sys: {
        type: 2,
        id: 2012644,
        country: "IT",
        sunrise: 1642316331,
        sunset: 1642349196,
      },
      timezone: 3600,
      id: 3173435,
      name: "Milan",
      cod: 200,
    },
  ]);

  const onCityDataUpdate = (newCity) => {
    setCityData((prevState) => {
      if (prevState.find((city) => city.name === newCity.name)) {
        return prevState;
      } else return [...prevState, newCity];
    });
  };

  const onCityRemove = (newCityName) => {
    const filteredCityData = cityData.filter(
      (city) => city.name !== newCityName
    );
    setCityData(filteredCityData);
  };

  return (
    <Container>
      <Title>Weather Lookup</Title>
      <SearchCity onCityDataUpdate={onCityDataUpdate} />
      <WeatherInformation removeCity={onCityRemove} data={cityData} />
    </Container>
  );
};

export default App;
