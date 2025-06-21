import React from "react";

const Price = ({ oldPrice, newPrice }) => {
  let oldStyle = {
    textDecorationLine: "line-through",
  };
  let newStyle = {
    fontWeight: "bold",
  };
  let style = {
    backgroundColor: "#e0c367",
    height: "31px",
    width: "200px",
    borderBottomRightRadius: "25px",
    borderBottomLeftRadius: "25px",
  };
  return (
    <div style={style}>
      <span style={oldStyle}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={newStyle}>{newPrice}</span>
    </div>
  );
};

export default Price;
