import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ItemList from './ItemList';
import { addToCart, removeFromCart, addToWishlist, removeFromWishlist, setOriginalProducts } from '../../actions/productAction';

//this function gets value from reducers in state
const mapStateToProps = state => ({
    productDetails: state.productReducer,
    cartDetails: state.cartReducer,
    wishlistDetails: state.wishlistReducer
});

//this function provides function which dispatch actions
const mapDispatchToProps = dispatch => ({
    actionAddToCart: (id) => {
        dispatch(addToCart(id));
    },
    actionDeleteFromCart: (id) => {
        dispatch(removeFromCart(id));
    },
    onItemWishlist: (id) => {
        dispatch(addToWishlist(id));
    },
    actionRemoveFromWishlist: (id) => {
        dispatch(removeFromWishlist(id));
    },
    setOriginalItems: () => {
        dispatch(setOriginalProducts());
    }
});

const MainViewClass = connect(mapStateToProps, mapDispatchToProps)(ItemList);

// Connect with reducer when use

export default withRouter(MainViewClass);
