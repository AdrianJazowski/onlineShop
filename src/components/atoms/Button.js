/** @format */

import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.5s ease-in-out;
  text-align: center;

  ${({ quantityButtonInCart }) =>
    quantityButtonInCart &&
    css`
      width: ${({ deleteBtn }) => (deleteBtn ? "75px" : "30px")};
      height: 30px;
      border-radius: 5px;
      border: 1px solid #b6b6b6;
      background: #b6b6b6;
    `}

  /* ${({ deleteButtonInCart }) =>
    deleteButtonInCart &&
    css`
      width: 75px;
      height: 30px;
      margin: auto 10px auto 0;
      border-radius: 5px;
      border: 1px solid #b6b6b6;
      background: #b6b6b6;
    `} */

  ${({ cartButtonInNav }) =>
    cartButtonInNav &&
    css`
      border-radius: 4px;
      background: transparent;
      padding: 5px px;
      color: #fff;
      text-decoration: none;
      margin-left: 24px;
      &:hover {
        background: #15cdfc;
      }
    `}

  ${({ buyButtonInCart }) =>
    buyButtonInCart &&
    css`
      margin: 0 0 10px;
      padding: 10px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 100%);
      border: solid 1px red;
      background-color: yellowgreen;
      transform: translate(-50%, 250%);
      text-transform: uppercase;
    `}
  ${({ submitInForm }) =>
    submitInForm &&
    css`
      width: 100px%;
      background: #39b7dd;
      padding: 15px;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      text-transform: uppercase;
    `}

  ${({ productListButton }) =>
    productListButton &&
    css`
      padding: 5px 15px;
      height: 40px;
      ${"" /* background: #74f367; */}
      background-color: ${({ theme }) => theme.colorsPalette.green};
      border-radius: 666px;
      &:hover {
        background: lime;
      }
    `}
`;

const CustomButton = ({
  children,
  color,
  cartButtonInNav,
  onClickFn,
  productListButton,
  quantityButtonInCart,
  deleteButtonInCart,
  buyButtonInCart,
  disabled,
  submitInForm,
}) => {
  return (
    <StyledButton
      color={color}
      cartButtonInNav={cartButtonInNav}
      productListButton={productListButton}
      quantityButtonInCart={quantityButtonInCart}
      deleteButtonInCart={deleteButtonInCart}
      buyButtonInCart={buyButtonInCart}
      onClick={onClickFn}
      disabled={disabled}
      submitInForm={submitInForm}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
