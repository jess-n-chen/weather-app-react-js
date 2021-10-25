import React from "react";

import "./FutureWeather.css";

export default function FutureWeather(props) {
  return (
    <div className="row future-weather">
      <div className="col-2">
        <p className="future-day">Mon</p>
        <i className="fas fa-sun future-temp-icon"></i>
        <p className="future-temp">
          {props.high}° / <span className="future-temp-low">{props.low}°</span>
        </p>
      </div>
      <div className="col-2">
        <p className="future-day">Tues</p>
        <i className="fas fa-cloud-rain future-temp-icon"></i>
        <p className="future-temp">
          {props.high}° / <span className="future-temp-low">{props.low}°</span>
        </p>
      </div>
      <div className="col-2">
        <p className="future-day">Wed</p>
        <i className="fas fa-cloud-sun future-temp-icon"></i>
        <p className="future-temp">
          {props.high}° / <span className="future-temp-low">{props.low}°</span>
        </p>
      </div>
      <div className="col-2">
        <p className="future-day">Thurs</p>
        <i className="fas fa-cloud-sun future-temp-icon"></i>
        <p className="future-temp">
          {props.high}° / <span className="future-temp-low">{props.low}°</span>
        </p>
      </div>
      <div className="col-2">
        <p className="future-day">Fri</p>
        <i className="fas fa-cloud-rain future-temp-icon"></i>
        <p className="future-temp">
          {props.high}° / <span className="future-temp-low">{props.low}°</span>
        </p>
      </div>
      <div className="col">
        <p className="future-day">Sat</p>
        <i className="fas fa-cloud-sun future-temp-icon"></i>
        <p className="future-temp">
          {props.high}° / <span className="future-temp-low">{props.low}°</span>
        </p>
      </div>
    </div>
  );
}
