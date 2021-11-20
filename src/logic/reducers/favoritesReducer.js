import { ADD_TO_FAVORITES } from "../actions/favoritesActions";
import { uniqBy } from "lodash/array";
const initialState = [];

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return [...uniqBy([...state, action.payload], 'id')];

        default:
            return state;
    }
};

