/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import About from "../views/about/About";
import Home from "../views/home/Home";
import Products from "../views/products/Products";
import Navbar from "../components/navigations/navbar/Navbar";
import ShopContext from "../context";
import { productsData } from "../localData/productsData";
import Cart from "../components/cart/Cart";
import SingleProduct from "../views/singleProduct/SingleProduct";
import Alert from "../components/alert/Alert";
import { alertTypes } from "../components/alert/alertTypes";
import { routes } from "../routes";

const Root = () => {
  const [products, setProducts] = useState([...productsData]);
  const [filteredProducts, setFilteredProducts] = useState([...productsData]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [categorySelect, setCategorySelect] = useState("all");
  const [nameSelect, setNameSelect] = useState("");
  const [priceSelect, setPriceSelect] = useState(10000);
  const [maxProductPrice, setMaxProductPrice] = useState(0);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("");

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const closeAlertAfterTime = (time) => {
    setTimeout(() => {
      setIsAlertOpen(false);
    }, time);
  };

  const getMaxProductPrice = () => {
    const productsPrices = products.map((product) => {
      return product.productPrice;
    });
    const maxPrice = Math.max(...productsPrices);
    setMaxProductPrice(maxPrice);
    console.log(maxPrice);
  };

  useEffect(() => {
    getMaxProductPrice();
  }, []);

  const handleCategorySelect = (e) => {
    setCategorySelect(e.target.value);
  };
  const handleNameSelect = (e) => {
    setNameSelect(e.target.value);
  };
  const handlePriceSelect = (e) => {
    setPriceSelect(e.target.ariaValueNow);
    console.log(e.target.ariaValueNow);
  };

  const filterProducts = () => {
    let tempProducts = [...products];

    if (categorySelect !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.productCategory === categorySelect;
      });
    }

    if (nameSelect !== "") {
      tempProducts = tempProducts.filter((product) => {
        return product.productName
          .toLowerCase()
          .includes(nameSelect.toLowerCase());
      });
    }
    if (priceSelect !== null) {
      tempProducts = tempProducts.filter((product) => {
        return product.productPrice <= priceSelect;
      });
    }

    setFilteredProducts([...tempProducts]);
  };

  useEffect(() => {
    filterProducts();
  }, [categorySelect, nameSelect, priceSelect]);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };
  const addProductToCart = (exampleProductId) => {
    const choosenProduct = products.find((product) => {
      return product.id === exampleProductId;
    });
    setCart([...new Set([...cart, choosenProduct])]);
    handleAlertOpen();
    setAlertType(alertTypes.add);

    closeAlertAfterTime(3000);
  };
  const deleteProductFromCart = (exampleProductId) => {
    const filteredProducts = cart.filter((product) => {
      if (product.id === exampleProductId) {
        product.productQuantity = 1;
      }
      return product.id !== exampleProductId;
    });
    setCart(filteredProducts);
    handleAlertOpen();
    setAlertType(alertTypes.delete);
    closeAlertAfterTime(3000);
  };
  const checkProductDuplicate = (exampleProduct, exampleProductId) => {
    if (cart.includes(exampleProduct)) {
      const mapedCart = cart.map((product) => {
        if (exampleProductId === product.id) {
          product.productQuantity += 1;
        }
        return product;
      });
      setCart(mapedCart);
    }
  };
  const decreaseProductInCart = (exampleProductId) => {
    const mapedCart = cart.map((product) => {
      if (product.id === exampleProductId) {
        product.productQuantity -= 1;
      }
      return product;
    });
    setCart(mapedCart);
  };
  const increaseProductInCart = (exampleProductId) => {
    const mapedCart = cart.map((product) => {
      if (product.id === exampleProductId) {
        product.productQuantity += 1;
      }
      return product;
    });
    setCart(mapedCart);
  };
  const calculateCartTotal = () => {
    let cartSum = 0;

    cart.forEach((product) => {
      cartSum = cartSum + product.productPrice * product.productQuantity;
    });

    setCartTotal(cartSum);
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  return (
    <BrowserRouter>
      <ShopContext.Provider
        value={{
          products,
          filteredProducts,
          handleCartClose,
          handleCartOpen,
          isCartOpen,
          addProductToCart,
          cart,
          deleteProductFromCart,
          checkProductDuplicate,
          decreaseProductInCart,
          increaseProductInCart,
          cartTotal,
          calculateCartTotal,
          clearCart,
          categorySelect,
          handleCategorySelect,
          handleNameSelect,
          nameSelect,
          handlePriceSelect,
          maxProductPrice,
          handleAlertOpen,
          handleAlertClose,
          isAlertOpen,
          alertType,
        }}
      >
        <Navbar />
        <Alert />
        <Cart />
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.products} component={Products} />
          <Route path={routes.about} component={About} />
          <Route path={routes.singleProduct} component={SingleProduct} />
        </Switch>
      </ShopContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
