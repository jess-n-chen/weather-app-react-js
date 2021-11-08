import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
  const iconTable = {
    "01d": {
      desc: "CLEAR_DAY",
      color: "GoldenRod",
    },
    "01n": {
      desc: "CLEAR_NIGHT",
      color: "LightSkyBlue",
    },
    "02d": {
      desc: "PARTLY_CLOUDY_DAY",
      color: "LemonChiffon",
    },
    "02n": {
      desc: "PARTLY_CLOUDY_NIGHT",
      color: "AliceBlue",
    },
    "03d": {
      desc: "PARTLY_CLOUDY_DAY",
      color: "LemonChiffon",
    },
    "03n": {
      desc: "PARTLY_CLOUDY_NIGHT",
      color: "AliceBlue",
    },
    "04d": {
      desc: "CLOUDY",
      color: "Silver",
    },
    "04n": {
      desc: "CLOUDY",
      color: "Silver",
    },
    "09d": {
      desc: "RAIN",
      color: "lightblue",
    },
    "09n": {
      desc: "RAIN",
      color: "lightblue",
    },
    "10d": {
      desc: "RAIN",
      color: "lightblue",
    },
    "10n": {
      desc: "RAIN",
      color: "lightblue",
    },
    "11d": {
      desc: "RAIN",
      color: "lightblue",
    },
    "11n": {
      desc: "RAIN",
      color: "lightblue",
    },
    "13d": {
      desc: "SNOW",
      color: "WhiteSmoke",
    },
    "13n": {
      desc: "SNOW",
      color: "WhiteSmoke",
    },
    "50d": {
      desc: "FOG",
      color: "LightSlateGray",
    },
    "50n": {
      desc: "FOG",
      color: "LightSlateGray",
    },
  };

  return (
    <ReactAnimatedWeather
      icon={iconTable[props.iconCode].desc}
      color={iconTable[props.iconCode].color}
      size={props.iconSize}
      animate={true}
    />
  );
}
