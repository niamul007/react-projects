import React from "react";

// Helper function for K to C conversion
const convertKelvinToCelsius = (kelvin) => {
  if (typeof kelvin === 'number') {
    return (kelvin - 273.15).toFixed(1);
  }
  return null;
};

export default function CurrentWeatherCard({ data }) {
  // CORRECTED DESTRUCTURING FOR RAW API RESPONSE
  const {
    name,       // City name is at top level
    main,       // Contains temp, feels_like, humidity
    weather,    // Array containing description and icon
    wind,       // Contains wind speed
    dt          // The timestamp
  } = data;

  // Further access nested properties
  const temp = main?.temp;
  const feelsLike = main?.feels_like;
  const humidity = main?.humidity;
  const description = weather?.[0]?.description;
  const icon = weather?.[0]?.icon;
  const windSpeed = wind?.speed;


  // Perform Conversion
  const tempCelsius = convertKelvinToCelsius(temp);
  const feelsLikeCelsius = convertKelvinToCelsius(feelsLike); 
  
  // Format Time
  const formattedTime = new Date(dt * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit', 
    minute: '2-digit'
  });

  return (
    <div className="current-weather-card">
      <div className="card-header">
        <h2 className="city-name">{name}</h2> {/* Use 'name' from the raw data */}
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
            {Math.round(tempCelsius)}°C 
          </span>
        </div>
        <p className="description">{description}</p>
      </div>

      <div className="details">
        <div className="detail-item">
          <strong>Feels Like:</strong> {Math.round(feelsLikeCelsius)}°C
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