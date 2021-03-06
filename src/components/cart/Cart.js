/** @format */

import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShopContext from "../../context";
import PaypalButton from "../paypal/PaypalButton";
import { CartDivWrapper } from "./CartStyles";
import CustomButton from "../atoms/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    scroll: "red",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "20px",
    width: "40vw",
    height: "80vh",
    overflowY: "scroll",
  },
}));

const Cart = () => {
  const classes = useStyles();
  const value = useContext(ShopContext);
  const {
    isCartOpen,
    handleCartClose,
    cart,
    deleteProductFromCart,
    decreaseProductInCart,
    increaseProductInCart,
    cartTotal,
  } = value;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isCartOpen}
        onClose={handleCartClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isCartOpen}>
          <div className={classes.paper}>
            <CartDivWrapper>
              <h2 id="transition-modal-title">Your cart</h2>
              <ul>
                {cart.map((product) => {
                  const {
                    productImage,
                    productName,
                    productPrice,
                    id,
                    productQuantity,
                  } = product;
                  return (
                    <li key={id}>
                      <img src={productImage} alt={productName} />
                      <p className="itemName">{productName}</p>
                      <div className="operation-wrapper">
                        <CustomButton
                          quantityButtonInCart
                          onClickFn={() => decreaseProductInCart(id)}
                          disabled={productQuantity === 1 ? true : false}
                        >
                          -
                        </CustomButton>
                        <p className="productQuantity">{productQuantity}</p>
                        <CustomButton
                          quantityButtonInCart
                          onClickFn={() => increaseProductInCart(id)}
                        >
                          +
                        </CustomButton>
                      </div>
                      <p className="productPrice">{productPrice}$</p>
                      <CustomButton
                        deleteBtn
                        quantityButtonInCart
                        onClickFn={() => deleteProductFromCart(id)}
                      >
                        delete
                      </CustomButton>
                    </li>
                  );
                })}
              </ul>
              {cartTotal === 0 ? null : (
                <div className="cartTotalWrapper">
                  <p>
                    Wartość koszyka: <strong>{cartTotal}</strong>
                  </p>
                  <CustomButton buyButtonInCart>Kup teraz</CustomButton>
                  <PaypalButton />
                </div>
              )}
            </CartDivWrapper>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Cart;
