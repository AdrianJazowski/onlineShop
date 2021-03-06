/** @format */

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  width: 100vw;
  display: flex;
  padding: 0.5rem calc((100vw - 1000px) / 6);
  z-index: 10;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// export const CartBtn = styled.button`
//   border-radius: 4px;
//   background: transparent;
//   padding: 5px px;
//   color: #fff;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   margin-left: 24px;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #15cdfc;
//   }
// `;
