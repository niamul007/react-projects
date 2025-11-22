import React from "react";
import "./App.css";
import UserProfile from "./componenets/UserProfile.jsx";
import { ProfileCard } from "./project-1/ProfileCard.jsx";
function App() {
  // App.jsx
  const user = {
    name: "Niamul",
    age: 22,
    profession: "Learner",
  };
  const item = <ProfileCard name={user.name} profession={user.profession} age={user.age} />;

  // render ProfileCard

  return (
    <>
    {item}
    </>
  );
}

export default App;
