import React, { useState } from "react";
// import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

const Lottery = ({ n = 3, winCondition }) => {
  let [ticket, setTicket] = useState(genTicket(n));

  let winTicket = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="tickets">
        <Ticket ticket={ticket} />
      </div>
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{winTicket && "Congrats! You Won!"}</h3>
    </div>
  );
};

export default Lottery;
