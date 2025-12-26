import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTask = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task to be added:", task);
    dispatch(addTodo(task));

    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      &nbsp; &nbsp;
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
