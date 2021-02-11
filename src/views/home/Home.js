/** @format */

import React from "react";
import Carusel from "../../components/carusel/Carusel";
import { Myh1 } from "../../components/carusel/CaruselStyles";
import { routes } from "../../routes";
import { LinkInHome } from "./HomeStyles";

const Home = () => {
  return (
    <>
      <LinkInHome to={routes.products}>
        <Myh1>Sprawdz nasze okazje</Myh1>
      </LinkInHome>
      <div
        style={{ height: "100hv", backgroundColor: "RGBA(255,41,252,0.06)" }}
      >
        <Carusel />
      </div>
    </>
  );
};

export default Home;
