import React from "react";
import DateTime from "./DateTime";
import Icon from "./Icon";
import DisplayTemp from "./DisplayTemp";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="row current-weather">
      <div className="col-6">
        <h1 id="current-city">{props.data.city}</h1>
        <ul>
          <li>
            <strong>Last Updated:</strong>
            <DateTime dateTime={props.data.date} />
          </li>
          <li>
            <strong>Humidity: </strong>
            {props.data.humidity}%
          </li>
          <li>
            <strong>Wind: </strong>
            {props.data.wind} km/h
          </li>
        </ul>
      </div>
      <div className="col-6 pt-4">
        <div className="icon px-4">
          <Icon iconCode={props.data.icon} />
        </div>
        <DisplayTemp cel={props.data.temperature} />
      </div>
    </div>
  );
}
