import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import { reducer, fetchReducer } from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    counter: reducer,
    fetch: fetchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
