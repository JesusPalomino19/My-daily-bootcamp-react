import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import UserCard from "./Components/UserCard";
import MyTeam from "./Components/MyTeam";
import CardsPublications from "./Components/CardsPublications";
function App() {
  let urlList = fetch()
  return (
    <div className="bg-gray-400">
      <Navbar />
      <UserCard />
      <MyTeam/>
      <CardsPublications urlList = {["https://my-daily-bootcamp.netlify.app/assets/feed/cups-1.jpg", "https://my-daily-bootcamp.netlify.app/assets/feed/cups-1.jpg"]}/>
      <CardsPublications urlList = {["https://my-daily-bootcamp.netlify.app/assets/feed/cups-1.jpg"]}/>
      <CardsPublications urlList = {["https://my-daily-bootcamp.netlify.app/assets/feed/cups-1.jpg", "https://my-daily-bootcamp.netlify.app/assets/feed/cups-1.jpg", "https://my-daily-bootcamp.netlify.app/assets/feed/cups-1.jpg"]}/>
    </div>
  );
}

export default App;
