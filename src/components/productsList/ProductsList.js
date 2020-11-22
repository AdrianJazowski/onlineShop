/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../../context";
import "./ProductsList.css";

const ProductsList = () => {
  const value = useContext(ShopContext);
  const { filteredProducts, addProductToCart, checkProductDuplicate } = value;
  return (
    <ul className="phone-list">
      {filteredProducts.map((product) => {
        const {
          productName,
          productPrice,
          productImage,
          id,
          productDescription,
        } = product;

        return (
          <li className="phone-list-one-item" key={id}>
            <Link
              to={{
                pathname: `/products/${productName.replace(/\s/g, "")}`,
                state: {
                  productName,
                  productImage,
                  productPrice,
                  productDescription,
                },
              }}
            >
              <img className="phone-img" src={productImage} alt={productName} />
            </Link>
            <p className="phone-name"> {productName} </p>
            <p className="phone-price">{productPrice}</p>
            <button
              className=""
              onClick={() => {
                checkProductDuplicate(product, id);
                addProductToCart(id);
              }}
            >
              Add to cart
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
