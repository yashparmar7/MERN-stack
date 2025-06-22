import React from "react";

function printHello() {
  console.log("Hello");
}

const Button = () => {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
    </div>
  );
};

export default Button;
