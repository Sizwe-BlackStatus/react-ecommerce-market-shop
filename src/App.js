import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Header from "./Components/Header";
import ProductListing from "./Components/ProductListings";
import ProductDetails from "./Components/ProductDetails";
import CartScreen from "./Components/CartScreen";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const addProductToCart = (selectedProduct) => {
    let productInCart = cartItem.find((item) => item.id === selectedProduct.id);
    if (productInCart === undefined) {
      setCartItem([...cartItem, { ...selectedProduct, quantity: 1 }]);
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === selectedProduct.id
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : item
        )
      );
    }
  };

  const removeProductFromCart = (selectedProduct) => {
    let productInCart = cartItem.find((item) => item.id === selectedProduct.id);
    if (productInCart !== undefined) {
      setCartItem(
        cartItem.map((item) =>
          item.id === selectedProduct.id
            ? { ...productInCart, quantity: productInCart.quantity - 1}
            : item
        ).filter((item) => item.quantity !== 0)
      );
    }
  };

  const clearCart = () => {
    setCartItem([])
  }

  return (
    <div className="App">
      <Router>
        <Header
          cartItem={cartItem}
        />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route
            path="/product/:productId"
            component={() => (
              <ProductDetails
                cartItem={cartItem}
                addProductToCart={addProductToCart}
              />
            )}
          />
          <Route
            path="/cart"
            component={() => (
              <CartScreen
                cartItem={cartItem}
                setCartItem={setCartItem}
                addProductToCart={addProductToCart}
                removeProductFromCart={removeProductFromCart}
                clearCart={clearCart}
              />
            )}
          />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
