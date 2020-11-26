/** @format */

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ShopContext from "../../../context";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    width: "50vw",
    margin: "auto",
  },
}));

const FilterByCategory = () => {
  const value = useContext(ShopContext);
  const { handleCategorySelect, categorySelect, products } = value;
  const classes = useStyles();

  const categories = [
    "all",
    ...new Set(products.map((product) => product.productCategory)),
  ];
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="categorySelect">Category</InputLabel>
      <Select
        labelId="categorySelect"
        id="categorySelect"
        value={categorySelect}
        onChange={handleCategorySelect}
        label="Category"
        className={classes.select}
      >
        {categories.map((category) => {
          return <MenuItem value={category}>{category}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default FilterByCategory;
