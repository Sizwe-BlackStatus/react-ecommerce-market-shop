import React from "react";
import "./ProductComponent.css"
import { Link } from "react-router-dom";

const ProductComponent = ({products}) => {
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="product-container" key={id}>
        <Link to={`/product/${id}`}>
            <div className="product-card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <h3>{title}</h3>
                <p className="price">$ {price}</p>
                <p className="category">{category}</p>
              </div>
            </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;