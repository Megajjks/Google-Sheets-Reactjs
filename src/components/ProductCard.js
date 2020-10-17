import React from "react";

const ProductCard = (product) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Travel Image"
        />
        <div className="card-body">
          <span className="tag tag-teal">Technology</span>
          <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
          <p>
            Numquam nemo magni temporibus quo reiciendis minima nostrum voluptas
            deserunt obcaecati exercitationem?
          </p>
          <div className="card-user">
            <img
              src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="User of Post"
            />
            <div className="user-info">
              <h5>John Doe</h5>
              <small>2 minutes ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
