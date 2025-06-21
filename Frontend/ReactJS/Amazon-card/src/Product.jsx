import React from "react";
import Price from "./Price";
import "./Product.css";

const Product = ({ title, idx }) => {
  let oldPrice = ["12,486", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "299"];

  let description = [
    ["8,000 DPI", "5 programmable buttons"],
    ["intuitive surface", "designed for iPad Pro"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
};

export default Product;
