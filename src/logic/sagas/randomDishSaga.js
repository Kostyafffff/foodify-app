import { takeEvery, put } from 'redux-saga/effects';
import { receiveRandomDish, REQUEST_RANDOM_DISH } from "../actions/randomDishActions";
import { mapRecipeData } from "./utils";

export function* requestRandomDish() {
    try {
        const data = yield fetch('https://www.themealdb.com/api/json/v1/1/random.php')
           .then(response => response.json())
           .then(data => data);

        const recipe = yield mapRecipeData(data.meals[0]);

        yield put(receiveRandomDish(recipe));

    } catch (error) {
        console.error(error.message);
    }
}

export function* requestRandomDishWatcher() {
    yield takeEvery(REQUEST_RANDOM_DISH, requestRandomDish);
}

