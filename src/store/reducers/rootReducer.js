import {
    TEST,
    GET_WORKS,
    SAVE_WORKS,
} from "../actions/";

const initialState = {
    project: null,
    posts: null,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return state;

        case GET_WORKS:
            return state;

        case SAVE_WORKS:
            return {
                ...state,
                posts: action.payload
            }

        default:
            return state;
    }
};
