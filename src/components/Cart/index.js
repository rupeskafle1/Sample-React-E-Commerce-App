import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Cart from "./Cart";
import { removeFromCart, resetAllStates } from "../../actions/productAction";

//this function gets value from reducers in state
const mapStateToProps = (state) => ({
    productDetails: state.productReducer,
    cartDetails: state.cartReducer,
});


//this function provides function which dispatch actions
const mapDispatchToProps = (dispatch) => ({
    handleRemoveFromCart: (id) => {
        dispatch(removeFromCart(id));
    },
    resetAll: (id) => {
        dispatch(resetAllStates(id));
    },
});

const MainViewClass = connect(mapStateToProps, mapDispatchToProps)(Cart);

// Connect with reducer when use

export default withRouter(MainViewClass);
