import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";

import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.placeholderCity);

  function setWeather(response) {
    setWeatherInfo({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function formSubmit(event) {
    event.preventDefault();
    weatherSearch();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function weatherSearch(event) {
    const weatherApiKey = "8a7d387ef910673e2322fa2db8174c73";
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

    axios.get(weatherApiUrl).then(setWeather);
  }

  let weatherForm = (
    <div className="row search-bar-container">
      <form className="search-city-form" onSubmit={formSubmit}>
        <input
          className="form-control"
          id="city-input"
          type="text"
          placeholder="Search City"
          onChange={updateCity}
        />
        <button type="submit" className="search-city-button">
          Search
        </button>
      </form>
    </div>
  );

  if (weatherInfo.ready) {
    return (
      <div className="main-container">
        <div className="container">
          {weatherForm}
          <CurrentWeather data={weatherInfo} />
          <FutureWeather data={weatherInfo.coordinates} />
        </div>
      </div>
    );
  } else {
    weatherSearch();
    return "Getting Weather Data...";
  }
}
