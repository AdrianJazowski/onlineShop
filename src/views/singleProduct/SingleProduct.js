/** @format */

import React from "react";
import { Wrapper } from "./SingleProductStyles";

const SingleProduct = (props) => {
  const {
    productName,
    productImage,
    productDescription,
    productPrice,
  } = props.location.state;
  return (
    <Wrapper>
      <h2 className="productName">{productName}</h2>
      <p className="productDescription">{productDescription}</p>
      <div classNdame="productPrice">
        <p>Cena {productPrice}</p>
        <button className="btn-buy">Dodaj do koszyka</button>
      </div>
      <div className="productImage">
        <img src={productImage} alt={productName} />
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
