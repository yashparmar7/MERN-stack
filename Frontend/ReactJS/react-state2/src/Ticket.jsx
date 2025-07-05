import React from "react";
import TicketNum from "../TicketNum";
import "./Lottery.css";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      {ticket.map((num, idx) => {
        return <TicketNum num={num} key={idx} />;
      })}
    </div>
  );
};

export default Ticket;
