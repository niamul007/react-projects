import React from "react";
import BlogCard from "./BlogCard";
import Loader from "./Loader";
const BlogList = ({ posts, loading, error }) => {
    if (loading) {
    return <Loader />;
    }
    if (error) {
    return <p className="error-text">Error: {error}</p>;
    }

  return (
    <div className="blog-list">
      {posts.map(post => (
        <BlogCard key={post.id} data={post} />
      ))}
    </div>
  );
};

export default BlogList;
