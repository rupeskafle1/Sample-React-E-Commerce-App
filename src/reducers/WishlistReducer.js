import constants from '../constants/constants';

const initialState = {
    wishlistedItems: []
};

//This reducer contains details of wishlisted items
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_TO_WISHLIST:
            return {
                ...state,
                wishlistedItems: [...state.wishlistedItems, action.id]
            };
        case constants.REMOVE_FROM_WISHLIST:
            const index = state.wishlistedItems?.indexOf(action.id);
            const itemsList = [...state.wishlistedItems];
            itemsList.splice(index, 1);
            return {
                ...state,
                wishlistedItems: itemsList
            };
        case constants.RESET_WISHLIST:
            return initialState;
        default:
            return state;
    }
}
