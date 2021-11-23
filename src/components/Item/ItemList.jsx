import React, { useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Grid from "@material-ui/core/Grid";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";

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
}));

/*This Component is rendering the multiple product cards*/
export default function ItemList(props) {
  const {
    productDetails,
    actionAddToCart,
    cartDetails,
    wishlistDetails,
    onItemWishlist,
    actionRemoveFromWishlist,
    setOriginalItems,
  } = props;
  const classes = useStyles();

  useEffect(() => {
    setOriginalItems();
  }, []);

  return (
    <Grid container spacing={3}>
      {productDetails.products?.map((option) => (
        <Grid
          item
          key={option.id}
          xs={12}
          sm={3}
          className={classes.centerAlignItems}
        >
          <ItemCard
            itemDetails={option}
            handleCartData={actionAddToCart}
            cartDetails={cartDetails}
            wishlistedDetails={wishlistDetails}
            onItemWishlist={onItemWishlist}
            actionRemoveFromWishlist={actionRemoveFromWishlist}
          />
        </Grid>
      ))}
      {productDetails.products?.length === 0 && (
        <div className={classes.noRecord}>No results found</div>
      )}
    </Grid>
  );
}
