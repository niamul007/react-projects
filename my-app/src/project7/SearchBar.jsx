import React from "react";

export default function SearchBar({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
    // Remember to implement the setQuery prop in WeatherApp!
    setQuery(""); 
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search city or zip code..."
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}