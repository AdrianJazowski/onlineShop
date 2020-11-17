/** @format */

import React from "react";

const SingleProduct = (props) => {
  const { productName, productImage } = props.location.state;
  return (
    <div>
      <h2>{productName}</h2>
      <img src={productImage} alt={productName} />
    </div>
  );
};

export default SingleProduct;
