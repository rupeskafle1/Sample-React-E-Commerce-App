import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { pink } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    width: 250,
    boxShadow: "5px 6px 4px lightgrey",
    border: "1px solid lightgray",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    fontWeight: "bold",
  },
  description: {
    color: "gray",
  },
  mrpPrice: {
    color: "#cac7c7",
    textDecoration: "line-through",
    marginLeft: "10px",
    fontSize: "13px",
  },
  discount: {
    color: "orange",
    marginLeft: "10px",
    fontSize: "13px",
  },
  notAllowed: {
    cursor: "not-allowed",
  },
});

/*This Component is displaying individual product card with details*/
const ItemCard = (props) => {
  const classes = useStyles();
  const {
    itemDetails,
    handleCartData,
    cartDetails,
    onItemWishlist,
    wishlistedDetails,
    actionRemoveFromWishlist,
    actionMoveToCart,
  } = props;

  const addToCart = (id) => {
    handleCartData(id);
  };

  const wishlistItem = (id) => {
    onItemWishlist(id);
  };
  return (
    <Card className={classNames(classes.root, "card")}>
      <CardContent>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <img
                  alt=""
                  src={itemDetails.url}
                  width="200px"
                  height="267px"
                />
              </td>
            </tr>
            <tr>
              <td className={classes.text}>{itemDetails.brand}</td>
            </tr>
            <tr>
              <td className={classes.description}>{itemDetails.description}</td>
            </tr>
            <tr>
              <td>
                {itemDetails.price} USD
                <span className={classes.mrpPrice}>
                  {itemDetails.mrpPrice} USD
                </span>
                <span className={classes.discount}>
                  ({itemDetails.discount}% OFF)
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
      <CardActions>
        {actionMoveToCart &&
        cartDetails?.cartItems?.indexOf(itemDetails.id) === -1 ? (
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={(e) => actionMoveToCart(itemDetails.id)}
            startIcon={<AddShoppingCartIcon />}
          >
            Move to Cart
          </Button>
        ) : (
          <>
            {cartDetails?.cartItems?.indexOf(itemDetails.id) === -1 &&
            !actionMoveToCart ? (
              <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={(e) => addToCart(itemDetails.id)}
                startIcon={<AddShoppingCartIcon />}
              >
                Add to Cart
              </Button>
            ) : (
              <Button
                size="small"
                color="secondary"
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                className={classes.notAllowed}
              >
                Added to Cart
              </Button>
            )}
          </>
        )}

        {wishlistedDetails?.wishlistedItems?.indexOf(itemDetails.id) === -1 ? (
          <Tooltip title="Wishlist Item">
            <Button
              onClick={() => wishlistItem(itemDetails.id)}
              data-testid="wishlist-btn"
            >
              <FavoriteBorderIcon style={{ color: pink[500] }} />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip title="Remove from Wishlist">
            <Button
              onClick={() => actionRemoveFromWishlist(itemDetails.id)}
              data-testid="remove-from-wishlist"
            >
              <FavoriteIcon style={{ color: pink[500] }} />
            </Button>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
};

export default ItemCard;
