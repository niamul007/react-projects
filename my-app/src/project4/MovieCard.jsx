import React from "react";

export default function MovieCard({ data }) {
    const {title,genre,rating,description,poster} = data;
  return (
    <div className="movie-card">
      <img src={poster} alt="Movie Poster" className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-genre">{genre}</p>
        <p className="movie-rating">Rating: {rating}</p>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
}
