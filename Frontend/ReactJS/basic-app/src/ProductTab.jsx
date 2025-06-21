import React from "react";
import Product from "./Product";

const ProductTab = () => {
  let option = ["hi-tech", "reliable"];
  return (
    <>
      <Product Title="Laptop" Price={30000} feature={option} />
      <Product Title="Mobile" Price={15000} />
      <Product Title="Television" />
    </>
  );
};

export default ProductTab;
