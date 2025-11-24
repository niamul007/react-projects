import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MList";

export default function App() {
  const [movie, setMovie] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [query, setquery] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    fetch("movie.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data);
        return;
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


    const filteredMovies = movie.filter((m)=>{
        return m.title.toLowerCase().includes(query.toLowerCase());
    });

  return (
    <div className="app-container">
      <h1>Movie Explorer</h1>
      <SearchBar query ={query} setquery = {setquery} />
      <MovieList  filteredMovies ={filteredMovies} loading={loading} error={error}/>
    </div>
  );
}
