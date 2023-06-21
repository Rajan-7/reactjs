// https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=981facad27f505f35dd4d846d1f36bea

import React, { useEffect, useState } from "react";
import Weathercard from "./weathercard";
import "./style.css";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("kathmandu");
  const [placeInfo, setPlaceInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=981facad27f505f35dd4d846d1f36bea`;
      const res = await fetch(url);
      const data = await res.json();
      const { humidity, pressure, temp } = data.main;
      const { main: weathermood } = data.weather[0];
      const { country, sunset } = data.sys;
      const { speed } = data.wind;
      const { name } = data;
      const myNewWeatherData = {
        temp,
        humidity,
        pressure,
        weathermood,
        country,
        sunset,
        speed,
        name,
      };
      setPlaceInfo(myNewWeatherData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  });
  return (
    <>
      <div className="search-wrapper">
        <div className="search">
          <input
            type="search"
            autoFocus
            id="searchid"
            className="searchTerm"
            placeholder="Search ..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="search-button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      {/* weather info of search place */}
      <Weathercard {...placeInfo} />
    </>
  );
};

export default Weather;
