import {
    RECEIVE_RANDOM_DISH,
    SHOW_RANDOM_DISH,
    SKIP_RANDOM_DISH
} from "../actions/randomDishActions";

const initialState = {
    isRandomDishShown: false,
    dish: {}
};

export const randomDishReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_RANDOM_DISH:
            return {
                ...state,
                isRandomDishShown: true
            }
        case SKIP_RANDOM_DISH:
            return {
                ...state,
                isRandomDishShown: false
            }
        case RECEIVE_RANDOM_DISH:
            return {
                ...state,
                dish: action.payload
            }
        default:
            return state;
    }
}
