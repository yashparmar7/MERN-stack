import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTask from "./AddTask";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();
  const handleClickDelete = (id) => {
    dispatch(deleteTodo(id));
    console.log("Deleted task :", id);
  };
  return (
    <div>
      <h3>* Todo List *</h3>
      <AddTask />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.isDone ? "Done" : "Pending"} &nbsp; &nbsp;
            <button onClick={() => dispatch(markAsDone(todo.id))}>Done</button>
            &nbsp;
            <button onClick={() => handleClickDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
