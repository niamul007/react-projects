import React from "react";
import "./App.css";
import UserProfile from "./componenets/UserProfile.jsx";
import { ProfileCard } from "./project-1/ProfileCard.jsx";
import { Weather } from "./project2/Weather.jsx";
import BlogApp from "./project3/BlogApp.jsx";
import Movie from "./project4/Movie.jsx";
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
    {/* {item} */}
    {/* <Weather /> */}
    {/* <BlogApp /> */}
    <Movie />
    </>
  );
}

export default App;
