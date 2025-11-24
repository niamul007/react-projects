import React, { useState } from "react";

const BlogCard = ({ data }) => {
  const { title, body } = data;

  const [show, setShow] = useState(false);
   function toggleShow() {
    setShow(prev => !prev);
   }
  return (
    <div className="card">
      <h2>{title}</h2>

      {/* toggle button */}
      <button className="toggle-btn" onClick={toggleShow}>
        {show ? "Hide" : "Show More"}
      </button>

      {/* conditional body text */}
      {show && <p className="body-text">{body}</p>}
    </div>
  );
};

export default BlogCard;
