import React, { useState } from "react";

const Prcatice = () => {
  let [message, setMessage] = useState("Hello");

  const handleChangeMsg = () => {
    setMessage((prev) => (prev === "Hello" ? "Bye" : "Hello"));
  };
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleChangeMsg}>Click!</button>
    </div>
  );
};

export default Prcatice;
