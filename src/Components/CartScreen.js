import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./CartScreen.css";

function CartScreen({
  cartItem,
  addProductToCart,
  removeProductFromCart,
  clearCart,
}) {
  let history = useHistory();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItem.length === 0) {
      setTotalPrice(0);
    } else {
      setTotalPrice(
        cartItem
          .map((item) => item.quantityPriceTotal)
          .reduce((prevTotal, nextTotal) => prevTotal + nextTotal, 0)
      );
    }
  }, [totalPrice])

  return (
    <div className="cart-screen-container">
      <div className="cart-items-header">
        <h2 className="cart-items">Cart Items</h2>
      </div>
      <img
        className="back-arrow"
        src="https://img.icons8.com/ios-glyphs/25/000000/circled-left-2.png"
        alt=""
        onClick={() => history.goBack()}
      />

      <div className="cart-container">
        {cartItem.length === 0 && <p className="cart-empty">Cart Empty</p>}
        {cartItem.map((item) => {
          let quantityPriceTotal = item.quantity * item.price;
          item["quantityPriceTotal"] = quantityPriceTotal;
          return (
            <div className="items">
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <p className="item-title">{item.title}</p>
              <button
                className="increase-quantity"
                onClick={() => addProductToCart(item)}
              >
                +
              </button>
              <button
                className="decrease-quantity"
                onClick={() => removeProductFromCart(item)}
              >
                -
              </button>
              <p className="quantity-price">
                {item.quantity} * ${quantityPriceTotal}
              </p>
            </div>
          );
        })}
        <div className="total-price-container">
          <p className="total">Total</p>
          <p className="total-price">${totalPrice}</p>
        </div>
        <button className="clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartScreen;
