import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const ProductDetails = ({
  addProductToCart,
}) => {
  let history = useHistory();
  const { productId } = useParams();
  const [product, setProd] = useState({});
  const { image, title, price, category, description } = product;
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((error) => {
        console.log("error: ", error);
      });
    setProd(response.data);
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]);
  return (
    <div className="product-details-container">
      {Object.keys(product).length === 0 ? (
        <div className="loading">...Loading</div>
      ) : (
        <div className="product-details">
          <img
            className="back-arrow"
            src="https://img.icons8.com/ios-glyphs/25/000000/circled-left-2.png"
            alt=""
            onClick={() => history.goBack()}
          />
          <img
            className="forward-arrow"
            src="https://img.icons8.com/material-outlined/25/000000/circled-right.png"
            alt=""
            onClick={() => history.goForward()}
          />
          <div className="product-image">
            <img src={image} alt={title} />
          </div>
          <div className="details">
            <h1>{title}</h1>
            <h2>
              <p className="price-tag">${price}</p>
            </h2>
            <h3 className="category-heading">{category}</h3>
            <p className="description">{description}</p>
            <h3
              className="add-to-cart"
              onClick={() => {
                addProductToCart(product);
              }}
            >
              Add to Cart
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
