/** @format */

import React from "react";
import FilterMenu from "../../components/filters/filterMenu/FilterMenu";
import ProductsList from "../../components/productsList/ProductsList";

const Products = () => {
  return (
    <>
      <FilterMenu />
      <ProductsList />
    </>
  );
};

export default Products;
