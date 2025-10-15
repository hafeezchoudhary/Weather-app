/** @format */

import React from "react";
import Container from "./Container";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails from "./WeatherDetails";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";

export default function ForecastWeatherDetail(props) {
  const {
    weatehrIcon = "02d",
    date = "19.09",
    day = "Tuesday",
    temp,
    feels_like,
    temp_min,
    temp_max,
    description
  } = props;

  return (
    <Container className="gap-4 bg-gray-900 text-gray-100 rounded-xl shadow-md">
      {/* left */}
      <section className="flex gap-4 items-center px-4">
        <div className="flex flex-col gap-1 items-center">
          <WeatherIcon iconName={weatehrIcon} />
          <p className="text-gray-300">{date}</p>
          <p className="text-sm text-gray-400">{day}</p>
        </div>

        {/* temperature + description */}
        <div className="flex flex-col px-4">
          <span className="text-5xl font-semibold text-white">
            {convertKelvinToCelsius(temp ?? 0)}°
          </span>
          <p className="text-xs space-x-1 whitespace-nowrap text-gray-400">
            <span>Feels like</span>
            <span>{convertKelvinToCelsius(feels_like ?? 0)}°</span>
          </p>
          <p className="capitalize text-gray-200">{description}</p>
        </div>
      </section>

      {/* right */}
      <section className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
}
