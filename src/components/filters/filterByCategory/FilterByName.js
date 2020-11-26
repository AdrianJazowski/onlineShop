/** @format */
import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import ShopContext from "../../../context";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    width: "50vw",
    margin: "auto",
  },
}));

const FilterByName = () => {
  const value = useContext(ShopContext);
  const { handleNameSelect } = value;
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.select}
        id="nameFilter"
        label="Name"
        variant="outlined"
        onChange={handleNameSelect}
      />
    </form>
  );
};

export default FilterByName;
