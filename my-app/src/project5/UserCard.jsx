import React from "react";

export default function UserCard({ data }) {
  const { title, first, last } = data.name;
  const { city, state, country } = data.location;

  return (
    <div className="user-card">
      <img src={data.picture.medium} alt="User" className="user-avatar" />
      <h2 className="user-name">{`${title} ${first} ${last}`}</h2>
      <p className="user-email">{data.email}</p>
      <p className="user-location">{`${city}, ${state}, ${country}`}</p>
    </div>
  );
}
