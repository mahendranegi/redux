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

  //Load data when the app starts

  return (    
        <div className="product-card">

          <img src={image} alt={title} />

          <h2 className="product-name">
            {title}
          </h2>

          <p className="price">
            ₹ {price}
          </p>

            <div style={{display:'flex',gap: '12px'}}>
          <button
            className="add-btn"
            onClick={()=>handleAddToCart()}
          >
            Add to Cart
          </button>
          <button
            className="add-btn"
            style={{background:'#ef6c82',border: '1px solid #ef6c82'}}
            onClick={handleMinusToCart}
          >
            Remove
          </button>
          </div>

        </div>
  );
}

export default ProductCart;