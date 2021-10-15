import React from "react";
import { Link } from "react-router-dom";
import CartItemCounter from "./CartItemCounter";
import "./Header.css";

const Header = ({ cartItem }) => {
  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">
          <h2>The Market</h2>
        </Link>
      </div>
      <div className="shopping-cart">
        <img
          src="https://img.icons8.com/material-outlined/20/000000/shopping-cart.png"
          alt=""
        />
        <Link to="/cart">
          <CartItemCounter cartItems={cartItem.length} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
