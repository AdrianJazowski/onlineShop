/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../../context";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { PhoneList, PhonePrice } from "./ProductListStyles";
import CustomButton from "../atoms/Button";

const useStyles = makeStyles({
  card: {
    width: "80%",
    height: "500px",
    margin: "10px auto",
    border: "1px solid",
  },
  cardAction: {
    height: "450px",
  },
  photo: {
    height: "250px",
    width: "auto",
    margin: "auto",
    padding: "10px",
  },
  cardContent: {
    height: "200px",
    overflowY: "scroll",
  },
  link: {
    textDecoration: "none",
  },
  cardActions: {
    height: "50px",
    justifyContent: "space-around",
    zIndex: "1000",
  },
});

const ProductsList = () => {
  const classes = useStyles();
  const value = useContext(ShopContext);
  const { filteredProducts, addProductToCart, checkProductDuplicate } = value;
  return (
    <PhoneList className="phone-list">
      {filteredProducts.map((product) => {
        const {
          productName,
          productPrice,
          productImage,
          id,
          productDescription,
        } = product;

        return (
          <Card className={classes.card} key={id}>
            <CardActionArea className={classes.cardAction}>
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
              <PhonePrice className="phone-price">
                Price: {productPrice}
              </PhonePrice>
              <CustomButton
                productListButton
                onClickFn={() => {
                  checkProductDuplicate(product, id);
                  addProductToCart(id);
                }}
              >
                Add to cart
              </CustomButton>
            </CardActions>
          </Card>
        );
      })}
    </PhoneList>
  );
};

export default ProductsList;
