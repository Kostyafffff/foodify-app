import { all } from 'redux-saga/effects';
import { requestRandomDishWatcher } from "./randomDishSaga";

export default function* rootSaga() {
    yield all([
        requestRandomDishWatcher(),
    ])
}
