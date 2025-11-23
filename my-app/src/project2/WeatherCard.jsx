import React from "react";
import "./WeatherCard.css"; // We'll keep CSS in a separate file (same as before)

const WeatherCard = ({
  city,
  country,
  localtime,
  temperature,
  feelslike,
  humidity,
  wind,
  icon,
  text,
}) => {
  return (
    <div className="weather-card">
      <div className="location">
        <h2>{`${city},${country}`}</h2>
        <p>{localtime}</p>
      </div>

      <div className="weather-main">
        <div className="temperature">{temperature}°</div>
        <div className="condition">
          <img src={icon} alt="Light Rain" className="weather-icon" />
          <p>{text}</p>
        </div>
      </div>

      <div className="details">
        <div className="detail-item">
          <span>Feels like</span>
          <strong>{feelslike}°</strong>
        </div>
        <div className="detail-item">
          <span>Humidity</span>
          <strong>{humidity} %</strong>
        </div>
        <div className="detail-item">
          <span>Wind</span>
          <strong>{wind} km/h</strong>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
