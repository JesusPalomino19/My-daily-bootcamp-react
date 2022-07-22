import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UserButton from "./Components/UserButton";
import UserCard from "./Components/UserCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-full h-screen bg-red-500 ">
      <UserCard></UserCard>
    </div>
  );
}

export default App;
