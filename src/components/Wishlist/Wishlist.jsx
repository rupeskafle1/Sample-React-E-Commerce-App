import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import Grid from "@material-ui/core/Grid";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar";
import Header from "../header/header";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centerAlignItems: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  noRecord: {
    width: "100%",
    textAlign: "center",
    margin: "70px",
  },
  mt10: {
    marginTop: "10px",
  },
}));

/*This Component is rendering the Wishlist*/
export default function Wishlist(props) {
  const {
    productDetails,
    actionAddToCart,
    wishlistDetails,
    actionMoveToCart,
    actionRemoveFromWishlist,
    cartDetails,
  } = props;
  const classes = useStyles();
  const items = productDetails.originalItems.filter(
    (ele) => wishlistDetails.wishlistedItems?.indexOf(ele.id) !== -1
  );
  return (
    <>
      <Header />
      <div className={classes.mt10}>
        <Navbar />
        <Grid container spacing={5}>
          {items?.map((option) => (
            <Grid
              item
              key={option.id}
              xs={12}
              sm={3}
              className={classes.centerAlignItems}
            >
              {/* this will render individual wishlist items */}
              <ItemCard
                itemDetails={option}
                handleCartData={actionAddToCart}
                actionMoveToCart={actionMoveToCart}
                actionRemoveFromWishlist={actionRemoveFromWishlist}
                cartDetails={cartDetails}
              />
            </Grid>
          ))}
          {items.length === 0 && (
            <div className={classes.noRecord}>
              Nothing in wishlist, go explore the amazing styles!
            </div>
          )}
        </Grid>
      </div>
    </>
  );
}
