import React from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import FutureWeather from "./FutureWeather";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="main-container">
      <div className="container App">
        <SearchBar />
        <CurrentWeather
          city="New York"
          temp={24}
          precipiation={15}
          humidity={81}
          wind={10}
          date="Sun, Jul 25"
          time="10:00"
        />
        <FutureWeather low={12} high={21} />
      </div>
      <Footer />
    </div>
  );
}
