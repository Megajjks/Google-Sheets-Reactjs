import React from "react";
import ProductCard from "./ProductCard";

const ProductCardList = (products, title) => {
  return (
    <div className="wrapper">
      <h1>Productos destacados</h1>
      <div className="productList-Wrapper">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductCardList;
