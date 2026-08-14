import React from "react";
import { useDispatch } from "react-redux";
import { DecrementItems, IncrementItems } from "../redux/slice";

function ProductCart({ title, price, image }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(IncrementItems());
  };
const handleMinusToCart = () => {
    dispatch(DecrementItems());
  };

  return (
    <div className="container">
      <div className="products">
        <div className="product-card">

          <img src={image} alt={title} />

          <h2 className="product-name">
            {title}
          </h2>

          <p className="price">
            ₹ {price}
          </p>

          <button
            className="add-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <span onClick={handleMinusToCart}>Click</span>

        </div>
      </div>
    </div>
  );
}

export default ProductCart;