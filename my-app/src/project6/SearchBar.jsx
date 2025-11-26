import React from "react";

export default function SearchBar({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    onSearch();
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search country..."
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
