import React from "react";
export function Avater({ name, url }) {
  return (
    <div className="avatar-container">
      <img className="avatar-img" src={url} alt={`Avatar of ${name}`} />
    </div>
  );
}
export default Avater;
