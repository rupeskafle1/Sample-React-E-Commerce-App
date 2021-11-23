import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Navbar from './Navbar';
import { handleFilterProducts } from '../../actions/filterAction';

//this function gets value from reducers in state
const mapStateToProps = state => ({
    productDetails: state.productReducer,
    cartDetails: state.cartReducer,
    wishlistDetails: state.wishlistReducer
});

//this function provides function which dispatch actions
const mapDispatchToProps = dispatch => ({
    handleFilterApply: (filters) => {
        dispatch(handleFilterProducts(filters));
    }
});

const MainViewClass = connect(mapStateToProps, mapDispatchToProps)(Navbar);

// Connect with reducer when use

export default withRouter(MainViewClass);
