import React from "react";

export default function CountryCard({data}) {

  return (
    <div className="country-card">
      <img
        src="https://flagcdn.com/w320/jp.png"
        alt="flag"
        className="country-flag"
      />

      <h2 className="country-name"></h2>

      <div className="country-basic">
        <p><strong>Capital:</strong> Tokyo</p>
        <p><strong>Region:</strong> Asia</p>
        <p><strong>Population:</strong> 123,210,000</p>
        <p><strong>Area:</strong> 377,930 km²</p>
      </div>

      <button className="country-btn">Show More</button>

      {/* Hidden section – you will toggle this with state */}
      <div className="country-more-info">
        <h3>Additional Information</h3>
        <p><strong>Subregion:</strong> Eastern Asia</p>
        <p><strong>Timezone:</strong> UTC+09:00</p>
        <p><strong>Languages:</strong> Japanese</p>
        <p><strong>Country Code:</strong> JPN</p>
        <p><strong>Currency:</strong> JPY</p>
        <p><strong>Maps:</strong> Google Maps & OpenStreetMap</p>
      </div>
    </div>
  );
}
