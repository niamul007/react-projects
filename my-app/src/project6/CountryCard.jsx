import React from "react";

export default function CountryCard({ data }) {
  const {
    // Nested Destructuring
    name: { common },

    // Array Property
    capital,

    // Simple Properties
    region,
    population,
    area,
    subregion,
    timezones,
    cca2,

    // Nested + Renaming (Currencies)
    currencies: {
      JPY: { name: currencyName },
    },

    // Nested + Renaming (Flags)
    flags: { png: flagUrl },

    // Languages is an Object, but you need an array or a specific language
    // We'll destructure the object but handle the values separately.
    languages,
  } = data; // <-- Assuming 'country' is the object being destructured

  // ⚠️ Post-Destructuring Cleanup for Safe Access

  // 1. Safely access the first element of the 'capital' array
  const primaryCapital = capital?.[0] ?? "N/A";

  // 2. Get the *first* value from the 'languages' object for display
  // (The API often returns language codes as keys, and names as values)
  const primaryLanguage = languages ? Object.values(languages)[0] : "N/A";

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

      <button className="country-btn">Show More</button>

      {/* Hidden section – you will toggle this with state */}
      <div className="country-more-info">
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
          <strong>Currency:</strong>{currencyName}
        </p>
        <p>
          <strong>Maps:</strong> Google Maps & OpenStreetMap
        </p>
      </div>
    </div>
  );
}
