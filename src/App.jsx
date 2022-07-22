import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MyTeam from "./components/MyTeam";
function App() {
  return <div className="bg-red-700">
            <Navbar/>
            <MyTeam/>
          </div>;
}

export default App;
