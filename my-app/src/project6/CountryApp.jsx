import React, { use } from "react";
import SearchBar from "./SearchBar";
import CountryList from "./CountryList";
import { useState } from "react";
import { useEffect } from "react";

export default function CountryApp() {

  useEffect(()=>{
    let ismounted = true;
    SetLoading(true)
    const data =async ()=>{
      try{
              const res = await fetch("https://restcountries.com/v3.1/name/japan");
      if(!res.ok){
        throw new Error("Fetching Faild");
      }
      const data = await res.json();
      setData(data)
      return;
      }
      catch(error){
        console.error(error.message);
      }
      finally{
        SetLoading(false)
      }
    }
    data()
    return ()=>{ismounted = false}
},[])

  const [data,setData] = useState();
  const[loading,SetLoading] = useState(false);
  const[error,setError] = useState(null);

  return (
    <div className="country-app">
      <h1 className="app-title">🌍 Country Explorer</h1>
      <pre>{JSON.stringify(data,null,2)}</pre>
      <SearchBar />
      <CountryList data ={data} loading ={loading} error={error}/>
    </div>
  );
}
