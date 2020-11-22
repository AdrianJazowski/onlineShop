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

const Root = () => {
  const [products, setProducts] = useState([...productsData]);
  const [filteredProducts, setFilteredProducts] = useState([...productsData]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [categorySelect, setCategorySelect] = useState("all");

  const handleCategorySelect = (e) => {
    setCategorySelect(e.target.value);
  };

  const filterProducts = () => {
    let tempProducts = [...products];

    if (categorySelect !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.productCategory === categorySelect;
      });
    }
    setFilteredProducts([...tempProducts]);
  };

  useEffect(() => {
    filterProducts();
  }, [categorySelect]);

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
  };
  const deleteProductFromCart = (exampleProductId) => {
    const filteredProducts = cart.filter((product) => {
      if (product.id === exampleProductId) {
        product.productQuantity = 1;
      }
      return product.id !== exampleProductId;
    });
    setCart(filteredProducts);
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
        }}
      >
        <Navbar />
        <Cart />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/products/:name" component={SingleProduct} />
        </Switch>
      </ShopContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
