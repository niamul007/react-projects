import { useEffect } from "react";
import { useState } from "react";
import WeatherCard from "./WeatherCard";
export function Weather() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      loadWeather();
    }, 500);
  }, []);

  function loadWeather() {
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
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
      <WeatherCard data={weatherData} />
    </div>
  );
}
export default Weather;
