import React from "react";
import AddToCart from "./AddToCart";

function Header() {
  return (
    <div>
      <header>
        {" "}
        <div className="logo"> 🛒 MiniCart </div>{" "}
        <AddToCart val={12} />
      </header>
    </div>
  );
}

export default Header;
