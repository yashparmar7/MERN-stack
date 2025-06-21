import Activity from "./Activity";
import "./App.css";
import ProductTab from "./ProductTab";

function App() {
  return (
    <>
      <Activity username="Yash" textcolor="Red" />
      <Activity username="Vikash" textcolor="Blue" />
      <ProductTab />
    </>
  );
}

export default App;
