import React, { useEffect, useState } from "react";
const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  country,
  sunset,
  speed,
  name,
}) => {
  const [weatherState, setWeatherState] = useState();

  //for converting time
  const sec = sunset;
  const date = new Date(sec * 1000);
  const myTime = `${date.getHours()}:${date.getMinutes()}`;

  //weathermood handler
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Cloudy":
          setWeatherState("wi-day-cloudy");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        case "Thunderstorm":
          setWeatherState("wi-night-thunderstorm");
          break;
        case "Haze":
          setWeatherState("wi-day-sunny-overcast");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  return (
    <>
      <article className="widget">
        <div className="weather-icon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weather-info">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="w-conditon">{weathermood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date-time">{new Date().toLocaleString()}</div>

        {/* Extra temperature information section */}
        <div className="extra-temp-info-section">
          <div className="temp-info">
            <div className="two-sided-info">
              <p>
                <i className={"wi-sunset"}></i>
              </p>
              <p className="extra-info-rightside">
                {myTime} PM
                <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-info">
              <p>
                <i className={"wi-humidity"}></i>
              </p>
              <p className="extra-info-rightside">
                {humidity} RH
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="temp-info">
            <div className="two-sided-info">
              <p>
                <i className={"wi-rain"}></i>
              </p>
              <p className="extra-info-rightside">
                {pressure} Pa
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-info">
              <p>
                <i className={"wi-strong-wind"}></i>
              </p>
              <p className="extra-info-rightside">
                {speed} Km/hr
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

export default Weathercard;
