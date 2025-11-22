
import React from "react";
export function Details({ name, title, bio }) {
  return (
    <div className="details-section">
      <h2>{name}</h2>
      <h3>{title}</h3>
      <p>{bio}</p>
    </div>
  );
}