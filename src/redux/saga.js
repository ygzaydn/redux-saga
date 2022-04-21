import { all, put, takeEvery, takeLatest } from "redux-saga/effects";

export function* exampleSaga() {
    console.log("Example saga reached");
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
    yield delay(1000);
    yield put({ type: "INCREMENT" });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeLatest("INCREMENT_ASYNC", incrementAsync);
    //yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
    yield all([exampleSaga(), watchIncrementAsync()]);
}
