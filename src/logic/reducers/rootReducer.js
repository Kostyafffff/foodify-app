import { combineReducers } from '@reduxjs/toolkit';
import { modalReducer } from "./modalReducer";
import { randomDishReducer } from "./randomDishReducer";
import { favoritesReducer } from "./favoritesReducer";


export const rootReducer = combineReducers({
    favorites: favoritesReducer,
    customDishModal: modalReducer,
    randomDish: randomDishReducer,
})
