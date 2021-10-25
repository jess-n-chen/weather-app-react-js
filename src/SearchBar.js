import React from "react";

import "./Search.css";

export default function SearchBar() {
  return (
    <div className="row search-bar-container">
      <div className="col-10 search-bar">
        <form className="search-city-form">
          <input
            className="form-control"
            id="city-input"
            type="text"
            placeholder="Search City"
          />
          <button type="submit" className="search-city">
            Search
          </button>
          <i
            className="fas fa-map-marker-alt"
            id="get-current-location"
            title="Get My Current Location"
          ></i>
        </form>
      </div>
      <div className="col-2 metric-option">
        <input type="radio" id="radioCel" name="radioMetric" value="°C" />
        <label htmlFor="radioCel">°C</label>
        <input type="radio" id="radioFah" name="radioMetric" value="°F" />
        <label htmlFor="radioFah">°F</label>
      </div>
    </div>
  );
}
