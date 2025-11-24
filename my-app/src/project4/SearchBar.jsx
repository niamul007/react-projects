import React from "react";

export default function SearchBar({query,setquery}) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search movies..." name ="movies" onChange={(e) => setquery(e.target.value)}  value={query}/>
      <button type="submit">Search</button>
    </div>
  );
}
