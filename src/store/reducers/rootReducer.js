import {
    TEST,
    GET_WORKS,
    SAVE_WORKS,
    GET_PROJECTS,
    SAVE_PROJECTS
} from "../actions/";

const initialState = {
    projects: null,
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

        case GET_PROJECTS:
            return state;

        case SAVE_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        default:
            return state;
    }
};
