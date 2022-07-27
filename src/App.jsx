import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import UserCard from "./Components/UserCard";
import MyTeam from "./Components/MyTeam";
import CardsPublications from "./Components/CardsPublications";
import Search from "./Components/Search";
import ModalLearning from "./Components/ModalLearning/ModalLearning";

function App() {
  const [posts, setPosts] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    obtenerDatos();
  }, []);
  const obtenerDatos = async () => {
    const post = await fetch(
      "https://my-daily-bootcamp.herokuapp.com/posts.json"
    );
    const infoPost = await post.json();
    setPosts([...infoPost]);
  };
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    obtenerUsers();
  }, []);
  const obtenerUsers = async () => {
    const user = await fetch(
      "https://my-daily-bootcamp.herokuapp.com/users.json"
    );
    const infoUsers = await user.json();
    // console.log(infoUsers);
    setUsers([...infoUsers]);
  };
  return (
    <div className="bg-[#f1f2f6] flex flex-wrap justify-center gap-10">
      <Navbar />
      <div className="w-[274px]">
        <UserCard />
        <MyTeam users={users} />
      </div>
      <div>
        <Search setMostrarModal={setMostrarModal}></Search>
        {posts.map((post, index) => {
          return (
            <CardsPublications key={index} post={post}></CardsPublications>
          );
        })}
      </div>
      <div className="w-[363px] h-[100vh] bg-red-500"></div>
      <ModalLearning
        setMostrarModal={setMostrarModal}
        mostrarModal={mostrarModal}
      ></ModalLearning>
    </div>
  );
}

export default App;
