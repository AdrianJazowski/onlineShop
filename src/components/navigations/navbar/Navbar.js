/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ShopContext from "../../../context";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Navbar = () => {
  const value = useContext(ShopContext);
  return (
    <nav className="navbar">
      <div className="brandName">
        <Link to="/">Zakupos</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <ShoppingBasketIcon
            // className="basket"
            onClick={value.handleCartOpen}
            style={{
              color: "#fff",
              alignItems: "center",
              margin: "15px 15px 15px 15px",
            }}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
