/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ShopContext from "../../../context";
import { routes } from "../../../routes";

const Navbar = () => {
  const value = useContext(ShopContext);
  const { cart } = value;
  return (
    <nav className="navbar">
      <div className="brandName">
        <Link to={routes.home}>Zakupos</Link>
      </div>
      <div className="navbar-wrapper">
        <ul className="navbar-links">
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
          <li>
            <Link to={routes.products}>Products</Link>
          </li>
          <li>
            <Link to={routes.about}>About</Link>
          </li>

          <li className="li__cart__btn">
            <button onClick={value.handleCartOpen} className="cart__btn">
              {cart.length}
            </button>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
