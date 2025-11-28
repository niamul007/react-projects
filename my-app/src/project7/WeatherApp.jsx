import React from "react";
import SearchBar from "./SearchBar";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastList from "./ForecastList";
const { useState, useEffect } = React;

export default function WeatherApp() {
  // TODO 1: Define all necessary state here using useState:
  //   - query (for the input field)
  //   - location (the city currently displayed)
  //   - weatherData (the final object from the API)
  //   - loading 
  //   - error
  const API_KEY = 'GB&appid=653f8950547083fe96d14f04426fe038';
  const [data,setData] = useState([]);
  const [query,setQuery] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null); 

  const fetchData = async (name)=>{
    let ismounted = true;
    setLoading(true);
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name},${API_KEY}`);
        if(!res.ok){
            throw new Error("Fetch isn't working");
        }
        const data = await res.json();
        setData(data);
        console.log(data);
    }
    catch(error){
        console.error(error.message)
    }
    finally{
        setLoading(false);
    }
    return ()=>{ismounted = false}
  }


  useEffect(()=>{
    fetchData("london");
  },[])

  // --- MOCK DATA FOR STRUCTURE (REPLACE THIS WITH YOUR STATE) ---
//   const query = ""; 
//   const location = "London";
//   const loading = false;
//   const error = null;
  
  // Placeholder functions for now
//   const setQuery = () => {}; 
//   const handleSearch = () => { console.log("Search triggered, implement fetchData next."); };
  
//   const mockCurrentWeather = {
//     city: location,
//     temp: 283.15, // Kelvin (You must convert this!)
//     description: "light rain",
//     icon: "10d",
//     humidity: 78,
//     windSpeed: 4.12,
//     date: Date.now(),
//   };
//   const mockForecast = [
//     { day: "Today", temp: 283.15, icon: "10d" },
//     { day: "Tomorrow", temp: 285.55, icon: "01d" },
//     { day: "Sun", temp: 280.99, icon: "04d" },
//     { day: "Mon", temp: 288.01, icon: "02d" },
//     { day: "Tue", temp: 286.75, icon: "03d" },
//   ];
  // -----------------------------------------------------------------


  // TODO 2: Implement the core logic functions:
  //   - async function fetchData(city)
  //   - useEffect for initial fetch (London)
  //   - useEffect to handle external changes (like geolocation)


  return (
    <div className="weather-app">
      <h1 className="app-title">
        <span role="img" aria-label="sun">☀️</span> Real-Time Weather Dashboard
      </h1>
      
      {/* Pass your actual state setters/getters here */}
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {/* Use your actual state variables (loading, error) for conditional rendering */}
      {loading && <p className="status-text">Loading weather...</p>}
      {error && <p className="status-text error-text">Error: {error}</p>}
      
      {!loading && !error && (
        <div className="weather-display">
          {/* Pass your actual weatherData here */}
          <CurrentWeatherCard data={data} /> 
          <ForecastList forecast={data} />
        </div>
      )}
    </div>
  );
}