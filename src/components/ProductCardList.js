import React from "react";
import ProductCard from "./ProductCard";

const ProductCardList = ({ products, title }) => {
  return (
    <div className="wrapper">
      <h1>{title}</h1>
      <div className="productList-Wrapper">
        {products.map((item, idx) => (
          <ProductCard key={idx} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
