/** @format */

import React, { useContext } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import ShopContext from "../../context";
const PaypalButton = () => {
  const value = useContext(ShopContext);
  const { handleCartClose, clearCart, cartTotal } = value;
  const onSuccessPayment = (paymet) => {
    console.log(paymet);
    handleCartClose();

    setTimeout(() => {
      clearCart();
    }, 500);
  };

  const onCancelPayment = (data) => {
    console.log(data);
  };

  const onError = (err) => {
    console.error(err);
  };

  const client = {
    sandbox: process.env.REACT_APP_SANDBOX_ID,
    production: "",
  };

  return (
    <PaypalExpressBtn
      onSuccess={onSuccessPayment}
      onCancel={onCancelPayment}
      onError={onError}
      client={client}
      env="sandbox"
      currency="USD"
      total={cartTotal}
    />
  );
};

export default PaypalButton;
