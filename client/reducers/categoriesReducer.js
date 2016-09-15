import * as actionTypes from "../actions/actionTypes"; //eslint-disable-line no-unused-vars
import initialState from "./initialState";

export default function categoriesReducer(state = initialState.categories, action) {
    switch (action.type) {
        case actionTypes.LOAD_CATEGORIES_SUCCESS: {
            return [...action.categories];
        }
        default: {
            return state;
        }
    }
}