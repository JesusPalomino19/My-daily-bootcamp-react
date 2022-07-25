import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UserCard from "./Components/UserCard";
import MyTeam from "./components/MyTeam";
import Search from "./Components/Search";
function App() {
  return (
    <div className="bg-gray-400">
      <Navbar /> <UserCard /> <MyTeam /> <Search></Search>
    </div>
  );
}

export default App;
