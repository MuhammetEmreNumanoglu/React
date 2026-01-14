import { useState } from "react";
import axios from "axios";
import "../src/App.css";
function TodoCreate({ onCreateTodo }) {
  const [ newTodo, setNewTodo ] = useState("");
  const clearInput = ()=>{
    setNewTodo('')
  }
  const createTodo2 = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 999999),
      content :newTodo
    };
    onCreateTodo(request);
    clearInput();
    
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Todo giriniz"
      />
      <button onClick={createTodo2} className="todo-create-button">
        Todo Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
