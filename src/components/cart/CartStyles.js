/** @format */

import styled from "styled-components";

export const CartDivWrapper = styled.div`
  ul {
    display: grid;

    li {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 5px;
      align-content: center;
      border: grey 1px dotted;
      margin: 0 0 5px;
      img {
        grid-row: 1/3;
        width: 50px;
        height: 100px;
        margin: 10px;
        align-self: center;
      }
      .itemName {
        grid-column: 2/5;
        font-weight: 900;
        margin: auto;
      }
      .operation-wrapper {
        grid-column: 2/3;
        grid-row: 2/3;
        display: flex;
        align-self: center;
        justify-self: center;

        .productQuantity {
          width: 47px;
          height: 30px;
          text-align: center;
          padding: 0 6px;
          float: left;
          border: 1px solid #d8d8d8;
          line-height: 30px;
        }
      }
      button,
      .btn-delete {
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        border: 1px solid #b6b6b6;
        width: 30px;
        height: 30px;
        text-align: center;
        background: #b6b6b6;
      }
      .productPrice {
        margin: auto;
        font-weight: 900;
        color: teal;
      }
      .btn-delete {
        width: 75px;
        margin: auto 10px auto 0;
      }
    }
  }
  .cartTotalWrapper {
    position: relative;

    p,
    .btn-buy {
      margin: 0 0 10px;
      padding: 10px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 100%);
      border: solid 1px red;
    }
    .btn-buy {
      background-color: yellowgreen;
      transform: translate(-50%, 250%);
      text-transform: uppercase;
    }
  }
`;
