import React from "react";

function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form was submitted");
}
const Form = () => {
  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <input type="text" name="" id="" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
