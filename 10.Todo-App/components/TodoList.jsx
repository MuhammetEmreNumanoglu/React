import Todo from "./Todo";
import "../src/App.css";

function TodoList({ todos ,onRemoveTodo,onUpdateTodo}) {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {Array.isArray(todos) &&
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
        ))}
    </div>
  );
}

export default TodoList;
