import React from "react";
import "./CartItemCounter.css";

function CartItemCounter({ cartItems }) {
  return <div className="counter">{cartItems}</div>;
}

export default CartItemCounter;
