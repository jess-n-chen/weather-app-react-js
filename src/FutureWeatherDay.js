import React from "react";
import Icon from "./Icon";

export default function FutureWeatherDay(props) {
  function getDay() {
    let futureDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let futureDate = new Date(props.data.dt * 1000);
    let futureDay = futureDate.getDay();

    return futureDays[futureDay];
  }
  return (
    <div>
      <p className="future-day">{getDay()}</p>
      <Icon iconCode={props.data.weather[0].icon} iconSize={50} />
      <p className="future-temp">
        <span className="future-temp-max">
          {Math.round(props.data.temp.max)}°
        </span>
        /
        <span className="future-temp-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </p>
    </div>
  );
}
