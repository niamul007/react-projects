import SearchBar from "./SearchBar";
import CountryList from "./CountryList";
import { useState } from "react";
import { useEffect } from "react";

export default function CountryApp() {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const fetchData = async (name) => {
    let ismounted = true;
    SetLoading(true);
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if (!res.ok) {
        // Attempt a partial search if full text fails
        const partialRes = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
      }
      const data = await res.json();
      setData(data);
      return;
    } catch (error) {
      console.error(error.message);
    } finally {
      SetLoading(false);
    }
    return ()=> {ismounted = false}
  };

  useEffect(() => {
    fetchData("japan");
  }, []);

  // 🔵 Called when user clicks Search button
  const handleSearch = () => {
    if (query.trim() === "") return;
    fetchData(query);
  };

  // const filteredData = data?.filter(item =>
  //   item.name.common.toLowerCase().includes(query.toLowerCase())
  // ) || [];

  return (
    <div className="country-app">
      <h1 className="app-title">🌍 Country Explorer</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <CountryList filteredData={data} loading={loading} error={error} />
    </div>
  );
}
