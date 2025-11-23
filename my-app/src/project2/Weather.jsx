import { useEffect } from "react";
import { useState } from "react";
import WeatherCard from "./WeatherCard";
export function Weather() {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    fetch("data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);
  {
    !weatherData.location && <p>Loading weather data...</p>;
  }
  return (
    <div className="container">
      <h1>Weather Component</h1>

      {/* <WeatherCard 
        city={weatherData.location.city}
        country={weatherData.location.country}
        localtime={weatherData.location.localtime}
        temperature={weatherData.current.temperature}
        feelslike={weatherData.current.feels_like}
        humidity={weatherData.current.humidity}
        wind={weatherData.current.wind}
        icon={weatherData.current.condition.icon}
        text={weatherData.current.condition.text}

      /> */}
      {/* // Render WeatherCard with optional chaining to avoid errors before data loads */}
      {/* <WeatherCard
        // city={weatherData.location?.city}
        // country={weatherData.location?.country}
        // localtime={weatherData.location?.localtime}
        // temperature={weatherData.current?.temperature}
        // feelslike={weatherData.current?.feels_like}
        // humidity={weatherData.current?.humidity}
        // wind={weatherData.current?.wind}
        // icon={weatherData.current?.condition?.icon}
        // text={weatherData.current?.condition?.text}
      /> */}
      {/* much cleaner way to write */}
      <WeatherCard data ={weatherData}/>
    </div>
  );
}
export default Weather;
