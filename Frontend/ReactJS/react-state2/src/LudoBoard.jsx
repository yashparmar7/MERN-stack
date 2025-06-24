import React, { useState } from "react";

const LudoBoard = () => {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });

  const [arr, setArr] = useState(["no moves"]);

  const updateMove = (color) => {
    setMoves((prevMove) => ({
      ...prevMove,
      [color]: prevMove[color] + 1,
    }));

    setArr((prevArr) => [...prevArr, `${color} moved`]);
  };

  return (
    <div>
      <div>
        <h2>Move History:</h2>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <h1>Ludo Game</h1>
      <div className="board">
        <p>Blue Moves = {moves.blue}</p>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => updateMove("blue")}
        >
          +1
        </button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={() => updateMove("yellow")}
        >
          +1
        </button>
        <p>Red Moves = {moves.red}</p>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => updateMove("red")}
        >
          +1
        </button>
        <p>Green Moves = {moves.green}</p>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => updateMove("green")}
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default LudoBoard;
