/** @format */

import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";

import { Nav, StyledLink, Bars, NavMenu, CartWrapper } from "./NavbarStyles";
import ShopContext from "../../../context";
import { routes } from "../../../routes";
import CustomButton from "../../atoms/Button";

const Navbar = () => {
  const value = useContext(ShopContext);
  const { cart, handleCartOpen } = value;
  return (
    <>
      <Nav>
        <StyledLink exact to="/">
          Zakupos
        </StyledLink>
        <Bars />
        <NavMenu>
          <StyledLink exact to={routes.home}>
            Home
          </StyledLink>
          <StyledLink to={routes.products}>Products</StyledLink>
          <StyledLink to={routes.about}>Contact</StyledLink>
        </NavMenu>
        <CartWrapper>
          <CustomButton cartButtonInNav onClickFn={handleCartOpen}>
            <AiOutlineShopping color="white" size="40px" />
            {cart.length}
          </CustomButton>
        </CartWrapper>
      </Nav>
    </>
  );
};

export default Navbar;
