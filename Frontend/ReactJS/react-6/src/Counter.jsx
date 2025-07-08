import React, { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount((currCount) => currCount + 1);
  };

  useEffect(function printSomething() {
    console.log("this is side-effect");
  });
  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={incCount}>+1</button>
    </div>
  );
};

export default Counter;
