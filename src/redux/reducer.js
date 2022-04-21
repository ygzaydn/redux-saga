import ACTIONTYPES from "./types";

const initialState = 0;

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

export default reducer;
