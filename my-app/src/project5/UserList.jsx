import React from "react";
import UserCard from "./UserCard";

export default function UserList({ users, loading, error,count,setcount }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p className="error-text">Error: {error}</p>;
  }
  if (!users) {
    return <p> not found</p>;
  }
  const handleClick = ()=>{
    setcount(precCount => precCount +1)
  }
  return (
    <div className="user-list">
      {users.map((item) => (
        <UserCard key = {item.id} data={item} />
      ))}
      <button onClick={handleClick}>New User</button>
    </div>
  );
}
