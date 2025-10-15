/** @format */

import React from "react";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { FiDroplet } from "react-icons/fi";
import { MdAir } from "react-icons/md";
import { ImMeter } from "react-icons/im";

export default function WeatherDetails(props) {
  const {
    visability = "25km",
    humidity = "61%",
    windSpeed = "7 km/h",
    airPressure = "1012 hPa",
    sunrise = "6:20",
    sunset = "18:48",
  } = props;

  return (
    <>
      <SingleWeatherDetail
        icon={<LuEye />}
        information="Visibility"
        value={visability}
      />
      <SingleWeatherDetail
        icon={<FiDroplet />}
        information="Humidity"
        value={humidity}
      />
      <SingleWeatherDetail
        icon={<MdAir />}
        information="Wind Speed"
        value={windSpeed}
      />
      <SingleWeatherDetail
        icon={<ImMeter />}
        information="Air Pressure"
        value={airPressure}
      />
      <SingleWeatherDetail
        icon={<LuSunrise />}
        information="Sunrise"
        value={sunrise}
      />
      <SingleWeatherDetail
        icon={<LuSunset />}
        information="Sunset"
        value={sunset}
      />
    </>
  );
}

function SingleWeatherDetail(props) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-gray-200">
      <p className="whitespace-nowrap text-gray-400">{props.information}</p>
      <div className="text-3xl text-white">{props.icon}</div>
      <p className="text-gray-300">{props.value}</p>
    </div>
  );
}
