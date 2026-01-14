import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import "../src/App.css";
function Todo({ todo, onRemoveTodo ,onUpdateTodo}) {
  const { id, content } = todo;
  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };
  const updateTodo =()=>{
    const request = {
      id:id,
      content : newTodo
    }
    onUpdateTodo
    setEditable(false)
  }
  return (
    <div
      style={{
        marginTop: "5px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        border: "1px solid lightgray",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>

      <div className="todo-icons">
        {" "}
        <CiCircleRemove className="todo-delete-icon" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-edit-icon" onClick={updateTodo} />
        ) : (
          <MdEdit
            className="todo-edit-icon"
            onClick={() => {
              setEditable(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
