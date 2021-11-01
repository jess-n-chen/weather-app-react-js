import React, { useState } from "react";

import "./DisplayTemp.css";

export default function DisplayTemp(props) {
  let [unit, setUnit] = useState("celsius");

  function displayFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temp-display">
        <h2>
          <span className="current-temp">{Math.round(props.cel)}</span>
          <span className="temp-metric">
            °C |{" "}
            <a href="/" onClick={displayFah}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.cel * 9) / 5 + 32;
    return (
      <div className="temp-display">
        <h2>
          <span className="current-temp">{Math.round(fahrenheit)}</span>
          <span className="temp-metric">
            <a href="/" onClick={displayCel}>
              °C
            </a>{" "}
            | °F
          </span>
        </h2>
      </div>
    );
  }
}
