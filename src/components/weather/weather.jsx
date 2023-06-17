// https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=981facad27f505f35dd4d846d1f36bea

import React from "react";
import "./style.css";

const Weather = () => {
  return (
    <>
      <div className="search-wrapper">
        <div className="search">
          <input
            type="search"
            autoFocus
            id="searchid"
            placeholder="Search ..."
          />
          <button className="search-button">Search</button>
        </div>
      </div>
      <article className="widget">
        <div className="weather-icon">
          <i className={"wi-day-sunny"}></i>
        </div>
        <div className="weather-info">
          <div className="temperature">
            <span>25.6&deg;</span>
          </div>
          <div className="description">
            <div className="weather-conditon">SUNNY</div>
            <div className="place">Ktm,Nepal</div>
          </div>
        </div>
        <div className="date-time">{new Date().toLocaleString()}</div>
        {/* 4 divided section */}
        <div className="extra-temp-info-section">
          <div className="temp-info">
            <div className="two-sided-info">
              <p>
                <i className={"wi-day-rain"}></i>
              </p>
              <p className="extra-info-rightside">
                19:19pm
                <br />
                Rainy
              </p>
            </div>
            <div className="two-sided-info">
              <p>
                <i className={"wi-humidity"}></i>
              </p>
              <p className="extra-info-rightside">
                74
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="extra-temp-info">
            <div className="two-sided-info">
              <p>
                <i className={"wi-rain"}></i>
              </p>
              <p className="extra-info-rightside">
                1014MM
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-info">
              <p>
                <i className={"wi-strong-wind"}></i>
              </p>
              <p className="extra-info-rightside">
                19:19pm
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weather;
