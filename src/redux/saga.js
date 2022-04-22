import { all, put, takeLatest } from "redux-saga/effects";
import { getPosts } from "./fetchCalls";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
    yield delay(1000);
    yield put({ type: "INCREMENT" });
}

export function* fetchData() {
    const res = yield getPosts();
    yield put({ type: "FETCH", payload: res });
}

export function* watchIncrementAsync() {
    yield takeLatest("INCREMENT_ASYNC", incrementAsync);
}

export function* startFetch() {
    yield takeLatest("START_FETCH", fetchData);
}

export default function* rootSaga() {
    yield all([watchIncrementAsync(), startFetch()]);
}
