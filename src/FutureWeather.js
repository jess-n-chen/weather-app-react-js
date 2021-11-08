import React, { useState, useEffect } from "react";
import axios from "axios";
import FutureWeatherDay from "./FutureWeatherDay";

import "./FutureWeather.css";

export default function FutureWeather(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="future-weather">
        <div className="row">
          {forecast.map(function (dailyWeather, index) {
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  <FutureWeatherDay data={dailyWeather} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const weatherApiKey = "8a7d387ef910673e2322fa2db8174c73";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&appid=${weatherApiKey}&units=metric`;

    axios.get(url).then(handleResponse);

    return null;
  }
}
