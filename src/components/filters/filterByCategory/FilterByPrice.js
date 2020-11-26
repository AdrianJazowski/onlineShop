/** @format */

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import ShopContext from "../../../context";

const useStyles = makeStyles({
  root: {
    width: "50vh",
    padding: "0px 10px",
  },
});

const FilterByPrice = () => {
  const value = useContext(ShopContext);
  const { handlePriceSelect, maxProductPrice } = value;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="priceFilter">Price</Typography>
      <Slider
        defaultValue={maxProductPrice === 0 ? 5000 : maxProductPrice}
        min={0}
        max={maxProductPrice === 0 ? 5000 : maxProductPrice}
        valueLabelDisplay="auto"
        onChange={handlePriceSelect}
      />
    </div>
  );
};
export default FilterByPrice;
