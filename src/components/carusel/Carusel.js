/** @format */

import React from "react";
import { Item, CarouselMY, Myh1 } from "./CaruselStyles";

const Carusel = () => {
  return (
    <>
      <Myh1>Sprawdz nasze okazje</Myh1>

      <CarouselMY>
        <Item
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2015/05/31/11/49/pink-791315_960_720.jpg)`,
          }}
        ></Item>
        <Item
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2018/01/11/21/27/desk-3076954_960_720.jpg)`,
          }}
        ></Item>
      </CarouselMY>
    </>
  );
};

export default Carusel;
