import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import UserCard from "./Components/UserCard";
import MyTeam from "./Components/MyTeam";
import CardsPublications from "./Components/CardsPublications";
import React, { useEffect } from "react";

function App() {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);
  const obtenerDatos = async () => {
    const post = await fetch("https://my-daily-bootcamp.herokuapp.com/posts.json");
    const infoPost = await post.json();
    console.log(infoPost);
    setPosts([...infoPost]);
  }
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    obtenerUsers();
  }, []);
  const obtenerUsers = async () => {
    const user = await fetch("https://my-daily-bootcamp.herokuapp.com/users.json");
    const infoUsers = await user.json();
    // console.log(infoUsers);
    setUsers([...infoUsers]);
  }
  return (
    <div className="bg-gray-400">
      <Navbar />
      <UserCard />
      <MyTeam users={users}/>
      {posts.map ((post)=>{
        return <CardsPublications post={post}>
        </CardsPublications>
      })}
    </div>
  );
}

export default App;
