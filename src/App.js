import React, { useState } from "react";
//Custom Components
import { Container, SearchCity, Title, WeatherInformation } from "./components";
//Styling CSS
import "./index.css";

const App = () => {
  const [cityData, setCityData] = useState([]);

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
