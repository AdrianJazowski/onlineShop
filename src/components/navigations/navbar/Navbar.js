/** @format */

import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyles";
import ShopContext from "../../../context";
import { routes } from "../../../routes";

const Navbar = () => {
  const value = useContext(ShopContext);
  const { cart, handleCartOpen } = value;
  return (
    <>
      <Nav>
        <NavLink exact to="/">
          Zakupos
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink exact to={routes.home}>
            Home
          </NavLink>
          <NavLink to={routes.products}>Products</NavLink>
          <NavLink to={routes.about}>About</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={handleCartOpen}>
            <AiOutlineShopping color="white" size="40px" />
            {cart.length}
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
