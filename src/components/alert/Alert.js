/** @format */
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert as MaterialUiAlert } from "@material-ui/lab";
import { IconButton, Collapse, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ShopContext from "../../context";
import { alertTypes } from "./alertTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    position: "absolute",
    top: "10%",
    left: "50%",
    zIndex: "10000",
    width: "35vw",
    transform: "translate(-50%, -10%)",
  },
}));
const Alert = () => {
  const classes = useStyles();
  const value = useContext(ShopContext);
  const { isAlertOpen, handleAlertClose, alertType } = value;

  return (
    <Collapse in={isAlertOpen}>
      <MaterialUiAlert
        severity={alertType === alertTypes.delete ? "error" : "success"}
        className={classes.alert}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleAlertClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {alertType}
      </MaterialUiAlert>
    </Collapse>
  );
};

export default Alert;
