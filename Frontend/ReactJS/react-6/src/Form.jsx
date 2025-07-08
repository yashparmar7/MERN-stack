import React, { useState } from "react";

const Form = () => {
  // let [fullName, setFullName] = useState("");
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
  });

  // const handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  let handleInputChange = (event) => {
    let fullName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fullName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      userName: "",
    });
    console.log(formData);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name :</label>
        <input
          type="text"
          id="fullname"
          placeholder="Enter Name"
          value={formData.fullName}
          name="fullName"
          onChange={handleInputChange}
        />
        <br></br>
        <label htmlFor="username">User Name :</label>
        <input
          type="text"
          id="username"
          placeholder="Enter UserName"
          value={formData.userName}
          name="userName"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
