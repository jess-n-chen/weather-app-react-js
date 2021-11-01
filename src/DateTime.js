import React from "react";

export default function DateTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.dateTime.getDay()];
  let hours = props.dateTime.getHours();
  let minutes = props.dateTime.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span className="date-value">
      {" "}
      {day}, {hours}:{minutes}
    </span>
  );
}
