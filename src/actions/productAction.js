import constants from "../constants/constants";

function addToCartUpdate(params) {
    return {
        type: constants.ADD_TO_CART,
        id: params
    };
}

export const addToCart = (params) => {
    return dispatch => {
        dispatch(addToCartUpdate(params));
    };
}

function removeFromCartUpdate(params) {
    return {
        type: constants.REMOVE_FROM_CART,
        id: params
    };
}

export const removeFromCart = (params) => {
    return dispatch => {
        dispatch(removeFromCartUpdate(params));
    };
}

function addToWishlistUpdate(params) {
    return {
        type: constants.ADD_TO_WISHLIST,
        id: params
    };
}

export const addToWishlist = (params) => {
    return dispatch => {
        dispatch(addToWishlistUpdate(params));
    };
}

function removeFromWishlistUpdate(params) {
    return {
        type: constants.REMOVE_FROM_WISHLIST,
        id: params
    };
}

export const removeFromWishlist = (params) => {
    return dispatch => {
        dispatch(removeFromWishlistUpdate(params));
    };
}

function moveToCart(params) {
    return {
        type: constants.REMOVE_FROM_WISHLIST,
        id: params
    };
}

export const handleMoveToCart = (params) => {
    return dispatch => {
        dispatch(addToCartUpdate(params))
        dispatch(moveToCart(params));
    };
}

const resetProducts = () => {
    return {
        type: constants.RESET_PRODUCTS
    }
}

const resetCart = () => {
    return {
        type: constants.RESET_CART
    }
}

export const resetAllStates = () => {
    return dispatch => {
        dispatch(resetProducts());
        dispatch(resetCart());
    }
}

const setOriginalItems = () => {
    return {
        type: constants.SET_ORIGINAL_ITEMS
    }
}

export const setOriginalProducts = () => {
    return dispatch => {
        dispatch(setOriginalItems());
    }
}