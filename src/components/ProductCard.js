import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={product[6]} alt="cover img" />
        <div className="card-body">
          <span className="tag tag-teal">{product[3]}</span>
          <h4>{product[1]}</h4>
          <p>{product[2]}</p>
          <div className="card-user">
            <img src={product[7]} alt="owner profile" />
            <div className="user-info">
              <h5>{product[4]}</h5>
              <small>{product[5]}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
