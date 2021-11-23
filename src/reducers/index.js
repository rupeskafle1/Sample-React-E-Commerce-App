import { combineReducers } from 'redux';
import productReducer from './ProductReducer';
import cartReducer from './CartReducer';
import wishlistReducer from './WishlistReducer';

//This contains combination of all reducers
export default combineReducers({
    productReducer,
    cartReducer,
    wishlistReducer
});