import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleCount}>Count +</button>
    </div>
  );
};

export default Counter;
