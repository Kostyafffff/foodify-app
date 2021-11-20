import { MODAL_OPEN, MODAL_CLOSE } from "../actions/modalActions";

const initialState = {
    isModalOpen: false
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return {
                ...state,
                isModalOpen: true
            }
        case MODAL_CLOSE:
            return {
                ...state,
                isModalOpen: false
            }
        default:
            return state;
    }
}
