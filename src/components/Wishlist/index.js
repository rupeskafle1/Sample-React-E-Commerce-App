import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Wishlist from './Wishlist';
import { handleMoveToCart, removeFromWishlist } from '../../actions/productAction';

//this function gets value from reducers in state
const mapStateToProps = state => ({
    productDetails: state.productReducer,
    wishlistDetails: state.wishlistReducer,
    cartDetails: state.cartReducer
});

//this function provides function which dispatch actions
const mapDispatchToProps = dispatch => ({
    actionMoveToCart: (id) => {
        dispatch(handleMoveToCart(id));
    },
    actionRemoveFromWishlist: (id) => {
        dispatch(removeFromWishlist(id));
    }
});

const MainViewClass = connect(mapStateToProps, mapDispatchToProps)(Wishlist);

// Connect with reducer when use

export default withRouter(MainViewClass);
