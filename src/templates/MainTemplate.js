/** @format */

import React from "react";
import Alert from "../components/alert/Alert";
import Cart from "../components/cart/Cart";
import Navbar from "../components/navigations/navbar/Navbar";
import GlobalStyle from "../globalStyles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../globalStyles/mainTheme";

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <Alert />
        <Cart />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
