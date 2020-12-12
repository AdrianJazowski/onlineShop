/** @format */

import React from "react";
import Alert from "../components/alert/Alert";
import Cart from "../components/cart/Cart";
import Navbar from "../components/navigations/navbar/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <Alert />
      <Cart />
      {children}
    </>
  );
};

export default MainTemplate;
