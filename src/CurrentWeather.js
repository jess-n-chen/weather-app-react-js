import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="row current-weather">
      <div className="col">
        <h1 id="current-city">{props.city}</h1>
        <div className="row">
          <div className="col">
            <i className="fas fa-cloud-moon current-temp-icon"></i>
            <p className="current-temp">{props.temp}°C</p>
          </div>
          <div className="col">
            <p>
              <strong>Precipitation: </strong>
              {props.precipitation}%
            </p>
            <p>
              <strong>Humidity: </strong>
              {props.humidity}%
            </p>
            <p>
              <strong>Wind: </strong>
              {props.wind} km/h
            </p>
          </div>
        </div>
      </div>
      <div className="col date-time-description">
        <h2 id="date-value">{props.date}</h2>
        <h2 id="time-value">{props.time} ET</h2>
        <h2>Cloudy</h2>
      </div>
    </div>
  );
}
