import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  let [todos, setTodos] = useState([{ task: "simple task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prev) => [...prev, { task: newTodo, id: uuidv4() }]);
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
  return (
    <div>
      '<h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add todo task"
        value={newTodo}
        onChange={updateTodo}
      />
      <button onClick={addNewTask}>Add task</button>
      <br />
      <br />
      <hr />
      <h3>Task List :</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} &nbsp; &nbsp;
            <button onClick={() => deleteTask(todo.id)}>Delete</button>&nbsp;
            &nbsp;
            <button onClick={() => uppercaseOne(todo.id)}>Uppercase now</button>
          </li>
        ))}
      </ul>
      <button onClick={uppercaseAll}>Uppercase All</button>
    </div>
  );
};

export default TodoList;
