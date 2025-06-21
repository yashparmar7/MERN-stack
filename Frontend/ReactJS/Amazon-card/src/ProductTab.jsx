import React from "react";
import Product from "./Product";

const ProductTab = () => {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1} />
      <Product title="Zebronic Zeb-transformer" idx={2} />
      <Product title="Petronic Toad 23" idx={3} />
    </div>
  );
};

export default ProductTab;
