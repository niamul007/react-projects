import React from "react";
import UserList from "./UserList";

export default function UserApp() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [count ,setcount]  = React.useState(false);


React.useEffect(() => {
  let isMounted = true;
  setLoading(true);

  const api = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      if (!res.ok) throw new Error("API loading failed");
      const data = await res.json(); // <-- fixed
      setUsers(data.results);
      console.log(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error.message);
    } finally {
      if (isMounted) setLoading(false);
    }
  };

  api();
  return () => { isMounted = false; };
}, [count]);


  return (
    <div className="app-container">
      <h1 className="title">Random User Directory</h1>

      <div className="search-bar">
      </div>
      <UserList users={users} loading={loading} error={error} count={count} setcount = {setcount}/>
    </div>
  );
}
