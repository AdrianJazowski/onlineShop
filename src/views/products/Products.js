/** @format */

import React from "react";
import FilterMenu from "../../components/filters/filterMenu/FilterMenu";
import ProductsList from "../../components/productsList/ProductsList";

const Products = () => {
  return (
    <div style={{ backgroundColor: "RGBA(255,41,252,0.06)" }}>
      <FilterMenu />
      <ProductsList />
    </div>
  );
};

export default Products;
