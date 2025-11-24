import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("blog.json")   // you will create this file
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then(data => {
        setPosts(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <h1>Blog Reader</h1>      
      <BlogList posts={posts} loading={loading} error={error} />
    </div>
  );
}

export default App;
