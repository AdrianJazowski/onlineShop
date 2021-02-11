/** @format */

import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const Myh1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 48px;
  background-color: rgba(255, 41, 252, 0.06);
`;

export const CarouselMY = styled(Carousel)`
  width: 80%;
  margin: auto;
  height: 87vh;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  color: #fff;
  font-size: 4em;
  background-repeat: no-repeat;
  ${"" /* background-size: cover; */}
  background-position: center;
`;
