/** @format */

import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default function WeatherIcon(props) {
  return (
    <div
      title={props.iconName}
      {...props}
      className={cn(
        "relative h-20 w-20 flex items-center justify-center rounded-xl bg-gray-800 shadow-md"
      )}
    >
      <Image
        width={100}
        height={100}
        alt="weather-icon"
        className="absolute h-full w-full object-contain"
        src={`https://openweathermap.org/img/wn/${props.iconName}@4x.png`}
      />
    </div>
  );
}
