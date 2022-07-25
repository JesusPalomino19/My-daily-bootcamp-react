import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UserCard from "./Components/UserCard";
import Search from "./Components/Search";
function App() {
  return (
    <div>
      <Navbar /> <UserCard />
      <Search></Search>
    </div>
  );
}

export default App;
