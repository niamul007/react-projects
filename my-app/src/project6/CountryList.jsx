import React from "react";
import CountryCard from "./CountryCard";

export default function CountryList({ filteredData, loading, error }) {
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p className="error-text">Error: {error}</p>;
    }
    if (!filteredData || filteredData.length === 0) {
        // Added a check for an empty array as well
        return <p>No country data found.</p>; 
    }

    return (
        <div className="country-list">
            {/* FIX: Use parentheses () for an implicit return */}
            {filteredData.map((item) => (
                // IMPORTANT: You MUST provide a unique 'key' prop when mapping lists in React.
                // Using a common property like the country's name is usually best.
                
                <CountryCard key={item.name.common} data={item} />
            ))}
        </div>
    );
}