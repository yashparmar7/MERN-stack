import React from "react";
import "./Product.css";

const Product = ({ Title, Price = 10000 }) => {
  let isDiscount = Price > 10000;
  let style = { backgroundColor: isDiscount && "yellow" };
  return (
    <div className="product" style={style}>
      <h1>{Title}</h1>
      <p>Price : {Price}</p>
      {/* <p>
        Feature :{" "}
        {feature.map((feature) => (
          <li>{feature}</li>
        ))}
      </p> */}
      {isDiscount && <p>Discount of 5%</p>}
    </div>
  );
};

export default Product;
