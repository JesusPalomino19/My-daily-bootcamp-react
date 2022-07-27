import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UserCard from "./Components/UserCard";
import MyTeam from "./Components/MyTeam";
import Search from "./Components/Search";
import ModalLearning from "./Components/ModalLearning/ModalLearning";
function App() {
  let [mostrarModal, setMostrarModal] = React.useState(false);
  return (
    <div className="bg-gray-400">
      <Navbar /> <UserCard /> <MyTeam />{" "}
      <Search setMostrarModal={setMostrarModal}></Search>{" "}
      <ModalLearning
        setMostrarModal={setMostrarModal}
        mostrarModal={mostrarModal}
      ></ModalLearning>
    </div>
  );
}

export default App;
