import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0); // initializes

  function incCount() {
    // setCount(count + 1);

    setCount((currVal) => {
      return currVal + 1;
    });
    setCount((currVal) => {
      return currVal + 1;
    });
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={incCount}>Inc Count</button>
    </div>
  );
};

export default Counter;
