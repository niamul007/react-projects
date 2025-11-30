import React from "react";

// NOTE: We don't need convertKelvinToCelsius inside the card anymore, 
// because the data is already converted and rounded in the fetchData function!

export default function CurrentWeatherCard({ data }) {
  // 1. Destructure the CLEAN, FLAT properties from the 'current' object
  const {
    location,       // Corresponds to 'name'
    description,    // Already a string
    temp,           // Already a string like "11.2"
    feelsLike,      // Already a string like "10.5"
    humidity,
    windSpeed,
    icon,
    dt,
  } = data;


  // 2. We only need to format the time and parse temperatures for display
  const formattedTime = new Date(dt * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit', 
    minute: '2-digit'
  });

  return (
    <div className="current-weather-card">
      <div className="card-header">
        {/* Use 'location' from the cleaned data */}
        <h2 className="city-name">{location}</h2> 
        <p className="date-time">Today, {formattedTime}</p>
      </div>
      
      <div className="main-info">
        <div className="temp-icon">
          <img 
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
            alt={description} 
            className="weather-icon"
          />
          <span className="current-temp">
            {/* Convert the cleaned string back to a number for Math.round() */}
            {Math.round(parseFloat(temp))}°C 
          </span>
        </div>
        <p className="description">{description}</p>
      </div>

      <div className="details">
        <div className="detail-item">
          <strong>Feels Like:</strong> {Math.round(parseFloat(feelsLike))}°C
        </div>
        <div className="detail-item">
          <strong>Humidity:</strong> {humidity}%
        </div>
        <div className="detail-item">
          <strong>Wind Speed:</strong> {windSpeed} m/s
        </div>
      </div>
    </div>
  );
}