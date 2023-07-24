import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function TodoItem({ todo, index, handleToggle, handleDelete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(index)}
      />
      <span
        className={todo.completed ? "completed" : null}
      >
        {todo.text}
      </span>
      <button
        className="btn btn-danger btn-sm float-right"
        onClick={() => handleDelete(index)}
      >
        Delete
      </button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a Todo App", completed: false },
    { text: "Style with Bootstrap", completed: false },
  ]);

  const handleAddTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="my-4">Todo List</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task..."
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleAddTodo(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          handleToggle={handleToggleTodo}
          handleDelete={handleDeleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
