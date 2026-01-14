import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoCreate from "./components/TodoCreate";

function App() {
  const [count, setCount] = useState(0);
  const [newTodo, setNewTodo] = useState();

  const todoUpdate = () => {};
  const todoDelete = () => {};
  const todoCreate = () => {};
  return (
    <>
      <TodoCreate newTodo= {newTodo} ></TodoCreate>
    </>
  );
}

export default App;
