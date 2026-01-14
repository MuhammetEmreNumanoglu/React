import React, { useState } from "react";
import "../../css/TodoCreate.css";

function TodoCreate(newTodo) {
  const { todo, setTodo } = useState("");
  todoCreate = () => {
    
  };
  return (
    <div>
      <div className="todo-create">
        <div className="todo-create-text">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={{ width: "300px", height: "42px", textAlign: "center" }}
            type="text"
            placeholder="Lütfen Ekleyeceğiniz Bir Şey yazın"
          />
        </div>
        <div className="create">
          <button onClick={todoCreate}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default TodoCreate;
