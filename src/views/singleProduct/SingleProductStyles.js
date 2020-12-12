/** @format */

import styled from "styled-components";
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 3fr;
  width: 80%;
  height: 80%;
  padding: 20px 0;
  margin: 0 auto;
  .productName {
    grid-column: 2/4;
    align-self: center;
  }
  .productImage {
    grid-row: 1/3;
    display: flex;
    margin: auto;
    justify-content:center;
    img {
      height: 50%;
      width: 80%;
    }
  }
  .productDescription {
    grid-row: 2/3;
    grid-column: 2/3;
    align-self: center;
    font-size: 1.2rem;
  }
  .productPrice{
    grid-row: 2/3;
    grid-column: 3/4;
    align-self: center;
    p{
    padding: 10px;
    align-self: center;
    }
    .btn-buy{
    display: block;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #b6b6b6;
    text-align: center;
    background: #3ceb06d2;
    }
    .btn-buy{
    display: block;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #b6b6b6;
    text-align: center;
    background: #3ceb06d2;
}
`;
