/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../../context";
import "./ProductsList.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "80%",
    margin: "auto",
  },
  photo: {
    height: "100%",
    width: "130px",
    margin: "auto",
    padding: "10px",
  },
  cardContent: {
    height: "15rem",
    overflowY: "scroll",
  },
  link: {
    textDecoration: "none",
  },
  cardActions: {
    justifyContent: "space-around",
  },
});

const ProductsList = () => {
  const classes = useStyles();
  const value = useContext(ShopContext);
  const { filteredProducts, addProductToCart, checkProductDuplicate } = value;
  return (
    <ul className="phone-list">
      {filteredProducts.map((product) => {
        const {
          productName,
          productPrice,
          productImage,
          id,
          productDescription,
        } = product;

        return (
          <Card className={classes.card}>
            <CardActionArea>
              <Link
                className={classes.link}
                to={{
                  pathname: `/products/${productName.replace(/\s/g, "")}`,
                  state: {
                    productName,
                    productImage,
                    productPrice,
                    productDescription,
                  },
                }}
              >
                <CardMedia
                  className={classes.photo}
                  component="img"
                  alt={productName}
                  image={productImage}
                  title={productName}
                />

                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {productName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {productDescription}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <p className="phone-price">Price: {productPrice}</p>
              <button
                className=""
                onClick={() => {
                  checkProductDuplicate(product, id);
                  addProductToCart(id);
                }}
              >
                Add to cart
              </button>
            </CardActions>
          </Card>

          /* <li className="phone-list-one-item" key={id}>
            <Link
              to={{
                pathname: `/products/${productName.replace(/\s/g, "")}`,
                state: {
                  productName,
                  productImage,
                  productPrice,
                  productDescription,
                },
              }}
            >
              <img className="phone-img" src={productImage} alt={productName} />
            </Link>
            <p className="phone-name"> {productName} </p>
            <p className="phone-price">{productPrice}</p>
            <button
              className=""
              onClick={() => {
                checkProductDuplicate(product, id);
                addProductToCart(id);
              }}
            >
              Add to cart
            </button>
          </li> */
        );
      })}
    </ul>
  );
};

export default ProductsList;
