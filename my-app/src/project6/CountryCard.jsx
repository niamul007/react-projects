import React, { useState } from "react";

export default function CountryCard({ data }) {
const {
        name: { common },
        capital,
        region,
        population,
        area,
        subregion,
        timezones,
        cca2,
        
        // 🔑 FIX: Get the full currencies object (Do NOT try to destructure JPY here!)
        currencies, 
        
        flags: { png: flagUrl },
        languages,
    } = data; // <-- Assuming 'country' is the object being destructured
    // ... (inside the component function) ...

// Destructuring block:


// 🎯 SIMPLE SOLUTION: Calculate the display string here
let currencyDisplay = 'N/A';

if (currencies) {
    // Get the first currency code (e.g., 'CAD')
    const currencyCodes = Object.keys(currencies);
    
    if (currencyCodes.length > 0) {
        const firstCode = currencyCodes[0];
        
        // Use the code to access the specific currency object
        const currencyObject = currencies[firstCode]; 
        
        // Build the final display string (Name and Symbol)
        currencyDisplay = `${currencyObject.name} (${currencyObject.symbol})`;
    }
}
// ...

  // ⚠️ Post-Destructuring Cleanup for Safe Access

  // 1. Safely access the first element of the 'capital' array
  const primaryCapital = capital?.[0] ?? "N/A";

  // 2. Get the *first* value from the 'languages' object for display
  // (The API often returns language codes as keys, and names as values)
  const primaryLanguage = languages ? Object.values(languages)[0] : "N/A";

  const [toggle,setToggle] = useState(false);
  function handleClick(){
    setToggle(prev=> !prev)
  }

  return (
    <div className="country-card">
      <img src={flagUrl} alt="flag" className="country-flag" />

      <h2 className="country-name">{common}</h2>

      <div className="country-basic">
        <p>
          <strong>Capital:</strong> {primaryCapital}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Area:</strong> {area} km²
        </p>
      </div>

      <button className="country-btn" onClick={handleClick}>Show More</button>

      {/* Hidden section – you will toggle this with state */}
{  toggle &&    <div className="country-more-info">
        <h3>Additional Information</h3>
        <p>
          <strong>Subregion:</strong> {subregion}
        </p>
        <p>
          <strong>Timezone:</strong> {timezones}
        </p>
        <p>
          <strong>Languages:</strong> {primaryLanguage}
        </p>
        <p>
          <strong>Country Code:</strong> {cca2}
        </p>
        <p>
          <strong>Currency:</strong>{currencyDisplay}
        </p>
        <p>
          <strong>Maps:</strong> Google Maps & OpenStreetMap
        </p>
      </div>}
    </div>
  );
}
