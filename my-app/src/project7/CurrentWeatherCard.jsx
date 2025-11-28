import React from "react";

export default function CurrentWeatherCard({ data }) {
  // TODO: Implement a function to convert Kelvin to Celsius/Fahrenheit here
  const tempCelsius = data.temp - 273.15; // Simple K to C conversion

  // TODO: Format the date properly using your date prop
  const formattedTime = new Date(data.date).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});

  return (
    <div className="current-weather-card">
      <div className="card-header">
        <h2 className="city-name">{data.city}</h2>
        <p className="date-time">Today, {formattedTime}</p>
      </div>
      
      <div className="main-info">
        <div className="temp-icon">
          {/* OpenWeatherMap icon URL structure */}
          <img 
            src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} 
            alt={data.description} 
            className="weather-icon"
          />
          <span className="current-temp">
            {Math.round(tempCelsius)}°C 
          </span>
        </div>
        <p className="description">{data.description.toUpperCase()}</p>
      </div>

      <div className="details">
        <div className="detail-item">
          <strong>Humidity:</strong> {data.humidity}%
        </div>
        <div className="detail-item">
          <strong>Wind Speed:</strong> {data.windSpeed} m/s
        </div>
        <div className="detail-item">
          <strong>Details:</strong> Cloudy
        </div>
      </div>
    </div>
  );
}