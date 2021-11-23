import constants from "../constants/constants";

export function filterProducts(filters) {
    return {
        type: constants.FILTER_PRODUCTS,
        filters
    };
}

export function setAppliedFilters(filters) {
    return {
        type: constants.APPLIED_FILTERS,
        filters
    };
}

export const handleFilterProducts = (filters) => {
    return dispatch => {
        dispatch(setAppliedFilters(filters))
        dispatch(filterProducts(filters));
    };
}