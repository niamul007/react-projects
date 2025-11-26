import React from "react";

export default function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search country..."
      />
    </div>
  );
}
