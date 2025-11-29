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
  const API_KEY = '653f8950547083fe96d14f04426fe038';
  const [data,setData] = useState([]);
  const [query,setQuery] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null); 

  const fetchData = async (name)=>{
    let ismounted = true;
    setLoading(true);
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`);
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
  },[]);

  function handleSearch(){
    if(query.trim() === "") return ;
    fetchData(query)
  }

  return (
    <div className="weather-app">
      <h1 className="app-title">
        <span role="img" aria-label="sun">☀️</span> Real-Time Weather Dashboard
      </h1>
      
      {/* Pass your actual state setters/getters here */}
      <SearchBar query={query} setQuery={setQuery}  onSearch ={handleSearch}/>

      {/* Use your actual state variables (loading, error) for conditional rendering */}
      {loading && <p className="status-text">Loading weather...</p>}
      {error && <p className="status-text error-text">Error: {error}</p>}
      
      {!loading && !error && (
        <div className="weather-display">
          {/* Pass your actual weatherData here */}
          <CurrentWeatherCard data={data} /> 
          {/* <ForecastList forecast={data} /> */}
        </div>
      )}
    </div>
  );
}