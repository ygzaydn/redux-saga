import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import reducer from "./reducer";
import { exampleSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(exampleSaga);
