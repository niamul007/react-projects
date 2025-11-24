import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ filteredMovies, loading, error }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p className="error-text">Error: {error}</p>;
  }

  if (filteredMovies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="movie-list">
      {filteredMovies.map((item) => (
        <MovieCard key={item.id} data={item} />
      ))}
    </div>
  );
}
