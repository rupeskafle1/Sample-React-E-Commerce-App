import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    width: "80%",
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
});

/*This Component is displaying individual cart item with details*/
const CartItem = (props) => {
  const classes = useStyles();
  const { itemDetails, handleRemoveFromCart } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={4} md={2}>
            <img alt="" src={itemDetails.url} width="80px" height="150px" />
          </Grid>
          <Grid item xs={8} md={8}>
            <div className={classes.text}>{itemDetails.brand}</div>
            <div className={classes.description}>{itemDetails.description}</div>
            <div>
              {itemDetails.price} USD
              <span className={classes.mrpPrice}>
                {itemDetails.mrpPrice} USD
              </span>
              <span className={classes.discount}>
                ({itemDetails.discount}% OFF)
              </span>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Tooltip title="Delete from Cart">
              <DeleteIcon
                style={{ color: red[500] }}
                onClick={() => handleRemoveFromCart(itemDetails.id)}
                data-testid="delete"
              />
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CartItem;
