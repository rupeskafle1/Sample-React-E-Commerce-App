import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./filter.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Filter from "./Filter";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  buttons: {
    float: "right",
  },
  ml15: {
    marginLeft: "15px",
  }
}));

/*This Component is rendering items in navbar */
export default function Navbar(props) {
  const classes = useStyles();
  const location = useLocation();

  const { cartDetails, wishlistDetails } = props;

  return (
    <div>
      <span className={classes.buttons}>
        {(location.pathname === "/products"  || location.pathname === '/') && <Filter {...props}/>}
        {(location.pathname !== "/products" && location.pathname !== '/') && (
          <Link to="/products">
            <Button
              variant="contained"
              color="primary"
              className={classes.ml15}
            >
              Go to products
            </Button>
          </Link>
        )}
        {location.pathname !== "/wishlist" && (
          <Link to="/wishlist">
            <Button
              variant="contained"
              color="primary"
              className={classes.ml15}
              startIcon={<FavoriteIcon />}
            >
              Wishlist{" "}
            {wishlistDetails.wishlistedItems?.length > 0
              ? `(${wishlistDetails.wishlistedItems?.length})`
              : ""}
            </Button>
          </Link>
        )}
        <Link to="/cart">
          <Button variant="contained" color="primary" className={classes.ml15} startIcon={<ShoppingCartIcon />}>
            Cart{" "}
            {cartDetails.cartItems?.length > 0
              ? `(${cartDetails.cartItems?.length})`
              : ""}
          </Button>
        </Link>
      </span>
    </div>
  );
}
