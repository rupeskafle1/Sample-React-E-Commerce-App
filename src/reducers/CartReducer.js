import constants from "../constants/constants";

const initialState = {
    cartItems: [],
};

// This reducer contains details of cart (items stored in cart)
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.indexOf(action.id === -1) ? [...state.cartItems, action.id] : [...state.cartItems],
            };
        case constants.REMOVE_FROM_CART:
            const index = state.cartItems?.indexOf(action.id);
            const itemsList = [...state.cartItems];
            itemsList.splice(index, 1);
            return {
                ...state,
                cartItems: itemsList,
            };
        case constants.RESET_CART:
            return initialState;
        default:
            return state;
    }
}
