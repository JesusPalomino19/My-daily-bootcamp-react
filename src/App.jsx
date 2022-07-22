import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UserCard from "./Components/UserCard";
function App() {
  return (
    <div>
      <Navbar /> <UserCard />
    </div>
  );
}

export default App;
