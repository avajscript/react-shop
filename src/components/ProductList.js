import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <div className="products">{products}</div>
    </div>
  );
};

export default ProductList;
