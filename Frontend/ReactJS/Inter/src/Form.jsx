import React, { useEffect, useState } from "react";
import FormData from "./FormData";

const Form = () => {
  const [user, setUser] = useState({
    username: "yash",
    fullname: "yashparmar",
  });

  const [submitData, setSubmitData] = useState([]);

  function handleInputChange(e) {
    let field = e.target.name;
    let newVal = e.target.value;

    setUser((prev) => {
      return { ...prev, [field]: newVal };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted User:", user);

    setSubmitData((prevUser) => [...prevUser, user]);

    setUser({
      username: "",
      fullname: "",
    });
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />{" "}
        <br /> <br />
        <label htmlFor="fullname">fullname : </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={user.fullname}
          onChange={handleInputChange}
        />{" "}
        <br /> <br />
        <button>submit</button>
      </form>
      {submitData.map((user, index) => (
        <FormData
          key={index}
          username={user.username}
          fullname={user.fullname}
        />
      ))}
    </div>
  );
};

export default Form;
