/** @format */

import React from "react";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const {
    productName,
    productImage,
    productDescription,
    productPrice,
  } = props.location.state;
  return (
    <div className="wrapper">
      <h2 className="productName">{productName}</h2>
      <p className="productDescription">{productDescription}</p>
      <div className="productPrice">
        <p>Cena {productPrice}</p>
        <button className="btn-buy">Dodaj do koszyka</button>
      </div>
      <div className="productImage">
        <img src={productImage} alt={productName} />
      </div>
    </div>
  );
};

export default SingleProduct;
