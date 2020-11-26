/** @format */

import React from "react";
import FilterByCategory from "../filterByCategory/FilterByCategory";
import FilterByName from "../filterByCategory/FilterByName";
import FilterByPrice from "../filterByCategory/FilterByPrice";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const FilterMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="filtersMenu">
          <Typography className={classes.heading}>More Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FilterByCategory />
            <FilterByName />
            <FilterByPrice />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterMenu;
