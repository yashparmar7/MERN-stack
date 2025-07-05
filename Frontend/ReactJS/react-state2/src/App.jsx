import TicketNum from "../TicketNum";
import "./App.css";
import { sum } from "./helper";
import Lottery from "./Lottery";
import LudoBoard from "./LudoBoard";
import Ticket from "./Ticket";
import TodoList from "./TodoList";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
