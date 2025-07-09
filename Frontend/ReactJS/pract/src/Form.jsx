import React, { useState } from "react";
import DisplayForm from "./DisplayForm";

const Form = () => {
  let [username, setUserName] = useState("");

  const handleUsername = (event) => {
    setUserName(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName("");
  };

  return (
    <div>
      <h1>Form</h1>
      <form action="" onSubmit={handleSubmit}>
        UserName :
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsername}
        />
        <button>Submit</button> <br />
        <DisplayForm username={username} />
      </form>
    </div>
  );
};

export default Form;
