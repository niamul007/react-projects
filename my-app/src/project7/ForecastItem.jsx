import React from "react";

export default function ForecastItem({ data }) {
  // TODO: Implement the same temperature conversion as in CurrentWeatherCard
  const tempCelsius = data.temp - 273.15;

  return (
    <div className="forecast-item">
      <p className="forecast-day">{data.day}</p>
      <img 
        src={`http://openweathermap.org/img/wn/${data.icon}.png`} 
        alt="Weather condition" 
        className="forecast-icon" 
      />
      <p className="forecast-temp">
        {Math.round(tempCelsius)}°C
      </p>
    </div>
  );
}