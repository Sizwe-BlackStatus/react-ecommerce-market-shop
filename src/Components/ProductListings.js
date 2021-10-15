import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./ProductListings.css";
import axios from "axios";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  let history = useHistory()
  const [products, setProductList] = useState([]);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("error: ", error);
      });
    setProductList(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <img
        className="forward-arrow"
        src="https://img.icons8.com/material-outlined/25/000000/circled-right.png"
        alt=""
        onClick={() => history.goForward()}
      />
      {products.length === 0 ? (
        <div className="loading">...Loading</div>
      ) : (
        <div className="products-container">
          <ProductComponent products={products} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
