import ACTIONTYPES from "./types";

const initialState = 0;
const initialFetchState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONTYPES.increment:
            return state + 1;
        case ACTIONTYPES.decrement:
            return state - 1;
        default:
            return state;
    }
};

const fetchReducer = (state = initialFetchState, action) => {
    switch (action.type) {
        case ACTIONTYPES.fetch:
            return [...action.payload];
        default:
            return state;
    }
};

export { fetchReducer, reducer };
