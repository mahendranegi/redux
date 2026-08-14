import React from "react";
import { useSelector } from "react-redux";

function AddToCart() {
  const count = useSelector((state) => state.cart.value);

  return (
    <div className="cart">
      Cart 🛍️ <span>{count}</span>
    </div>
  );
}

export default AddToCart;