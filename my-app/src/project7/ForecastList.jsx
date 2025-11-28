import React from "react";
import ForecastItem from "./ForecastItem";

export default function ForecastList({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return null;
  }

  return (
    <div className="forecast-list">
      <h3>5-Day Forecast</h3>
      <div className="forecast-container">
        {/* DO: Use the map function to iterate over your forecast prop */}
        {forecast.map((item, index) => (
          <ForecastItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}