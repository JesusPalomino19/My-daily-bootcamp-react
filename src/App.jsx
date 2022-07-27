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
  return (
    <div className="bg-gray-400">
      <Navbar />
      <UserCard />
      <MyTeam/>
      {posts.map ((post)=>{
        return <CardsPublications post={post}>
        </CardsPublications>
      })}
    </div>
  );
}

export default App;
