import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

const TodoList = () => {
  let [todos, setTodos] = useState([
    { task: "simple task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prev) => [
      ...prev,
      { task: newTodo, id: uuidv4(), isDone: false },
    ]);
  };

  let updateTodo = (e) => {
    setNewTodo(e.target.value);
  };

  let deleteTask = (id) => {
    setTodos((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id != id));
  };

  let uppercaseAll = () => {
    setTodos((prevtodo) =>
      prevtodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let markAllAsDone = () => {
    setTodos((prevtodo) =>
      prevtodo.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let uppercaseOne = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return todo;
        }
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <div className="todo-input-group">
        <input
          type="text"
          placeholder="Add todo task"
          value={newTodo}
          onChange={updateTodo}
        />
        <button onClick={addNewTask}>Add</button>
      </div>

      <div className="task-section">
        <h3>Task List:</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span className={todo.isDone ? "task-done" : ""}>
                {todo.task}
              </span>
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
              <button onClick={() => uppercaseOne(todo.id)}>Uppercase</button>
              <button onClick={() => markAsDone(todo.id)}>Done</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bulk-actions">
        <button onClick={uppercaseAll}>Uppercase All</button>
        <button onClick={markAllAsDone}>Mark Done All</button>
      </div>
    </div>
  );
};

export default TodoList;
