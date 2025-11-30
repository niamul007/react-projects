import React from "react";
import SearchBar from "./SearchBar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastList from "./ForecastList";
const { useState, useEffect } = React;

// --- GLOBAL/OUTSIDE COMPONENT DEFINITIONS ---

const API_KEY = "653f8950547083fe96d14f04426fe038";

const convertKelvinToCelsius = (kelvin) => {
  if (typeof kelvin === "number") {
    return (kelvin - 273.15).toFixed(1);
  }
  return null;
};

const filterForecastData = (list) => {
  const dailyData = {};
  const today = new Date().toDateString();

  list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const itemDateString = date.toDateString();

    if (itemDateString === today) {
      return;
    }

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    // Initialize the daily data object if it doesn't exist
    if (!dailyData[dayName]) {
      dailyData[dayName] = {
        // Initialize min/max with extreme values
        tempMax: -Infinity,
        tempMin: Infinity,
        // Store the full item for the descriptive data (icon, description, etc.)
        noonItem: item,
      };
    }

    // 1. **CRITICAL FIX**: Update the overall max and min for the day
    const currentTemp = item.main.temp; // Use the snapshot temp for comparison

    if (currentTemp > dailyData[dayName].tempMax) {
      dailyData[dayName].tempMax = currentTemp;
    }
    if (currentTemp < dailyData[dayName].tempMin) {
      dailyData[dayName].tempMin = currentTemp;
    }

    // 2. Optionally, update the descriptive item to be the one closest to noon
    const hour = date.getHours();
    const storedNoonHour = new Date(
      dailyData[dayName].noonItem.dt * 1000
    ).getHours();

    if (Math.abs(hour - 12) < Math.abs(storedNoonHour - 12)) {
      dailyData[dayName].noonItem = item;
    }
  });

  // 3. Convert the map back to an array, using the calculated Min/Max
  const finalForecast = Object.values(dailyData)
    .slice(0, 5)
    .map((dayEntry) => ({
      date: dayEntry.noonItem.dt * 1000,
      day: new Date(dayEntry.noonItem.dt * 1000).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      // Use the calculated daily high/low for display
      tempMax: convertKelvinToCelsius(dayEntry.tempMax),
      tempMin: convertKelvinToCelsius(dayEntry.tempMin),
      description: dayEntry.noonItem.weather[0].description,
      icon: dayEntry.noonItem.weather[0].icon,
    }));

  return finalForecast;
};

// --- WEATHER APP COMPONENT ---

export default function WeatherApp() {
  // 1. IMPROVED STATE NAMES (weatherData instead of data)
  const [weatherData, setWeatherData] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      // ... (API CALLS 1 & 2 are perfect, no change needed)
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
      const currentRes = await fetch(currentUrl);
      // ... error handling ...
      const currentData = await currentRes.json();
      const { lat, lon } = currentData.coord;

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      const forecastRes = await fetch(forecastUrl);
      // ... error handling ...
      const forecastData = await forecastRes.json();

      // --- DATA UNIFICATION ---
      const dailyForecast = filterForecastData(forecastData.list);

      const finalData = {
        current: {
          location: currentData.name,
          country: currentData.sys.country,
          temp: convertKelvinToCelsius(currentData.main.temp),
          feelsLike: convertKelvinToCelsius(currentData.main.feels_like),
          description: currentData.weather[0].description,
          icon: currentData.weather[0].icon,
          dt: currentData.dt,
          windSpeed: currentData.wind.speed,
          humidity: currentData.main.humidity,
        },
        forecast: dailyForecast,
      };

      setWeatherData(finalData); // 2. Use setWeatherData
    } catch (err) {
      console.error("Error fetching weather:", err.message);
      setError(err.message);
      setWeatherData(null); // 2. Use setWeatherData
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("london");
  }, []);

  function handleSearch() {
    if (query.trim() === "") return;
    fetchData(query.trim());
    setQuery("");
  }

  return (
    <div className="weather-app">
      <h1 className="app-title">
        <span role="img" aria-label="sun">
          ☀️
        </span>{" "}
        Real-Time Weather Dashboard
      </h1>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {loading && <p className="status-text">Loading weather...</p>}
      {error && <p className="status-text error-text">Error: {error}</p>}

      {/* 3. Check for weatherData AND access the nested 'current' and 'forecast' properties */}
      {weatherData && !loading && !error && (
        <div className="weather-display">
          {/* Pass ONLY the current object */}
          <CurrentWeatherCard data={weatherData.current} />

          {/* Pass ONLY the forecast array */}
          <ForecastList forecast={weatherData.forecast} />
        </div>
      )}
    </div>
  );
}
