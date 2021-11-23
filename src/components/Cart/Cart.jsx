import React from "react";
import CartItem from "./CartItem";
import Grid from "@material-ui/core/Grid";
import "../../index.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar";
import CustomizedTables from "../common/CustomizedTable";
import Button from "@material-ui/core/Button";
import Modal from "../common/Modal";
import { useHistory } from "react-router";
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
    justifyContent: "space-between",
    marginBottom: "17px",
  },
  noRecord: {
    width: "100%",
    textAlign: "center",
    margin: "70px",
  },
  mt10: {
    marginTop: "10px",
  },
  cardTitle: {
    marginBottom: "10px",
    fontSize: "18px",
  },
}));

/*This Component is rendering the cart*/
export default function Cart(props) {
  const { productDetails, cartDetails, handleRemoveFromCart } = props;

  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.resetAll();
    history.push("/");
  };

  const classes = useStyles();
  const cartItems = productDetails.originalItems?.filter(
    (ele) => cartDetails.cartItems?.indexOf(ele.id) !== -1
  );
  let totalPrice = 0;
  let totalMRP = 0;
  cartItems.forEach((ele) => {
    totalPrice = totalPrice + ele.price;
    totalMRP = totalMRP + ele.mrpPrice;
  });

  const totalDiscount = totalMRP - totalPrice;

  const tableRows = [
    {
      name: "Total Price",
      value: `${totalMRP} USD`,
    },
    {
      name: "Discount",
      value: `${totalDiscount} USD`,
    },
    {
      name: "Final Price",
      value: `${totalPrice} USD`,
    },
  ];
  return (
    <>
      <Header />
      <div className={classes.mt10}>
        <Navbar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={3}>
              <div className="cart-container">
                <div className={classes.cardTitle}>Cart Items</div>
                {cartItems?.map((option) => (
                  <Grid
                    item
                    key={option.id}
                    xs={12}
                    className={classes.centerAlignItems}
                  >
                    <CartItem
                      itemDetails={option}
                      handleRemoveFromCart={handleRemoveFromCart}
                      cartDetails={cartDetails}
                    />
                  </Grid>
                ))}
                {cartItems?.length === 0 && (
                  <div className={classes.noRecord}>
                    No items in cart, start shopping now!
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            {totalPrice > 0 && (
              <div className="summary-container">
                <div className={classes.cardTitle}>Summary</div>
                <CustomizedTables rows={tableRows} />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.mt10}
                  onClick={handleClickOpen}
                >
                  Checkout
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
        <Modal open={open} handleClose={handleClose} />
      </div>
    </>
  );
}
