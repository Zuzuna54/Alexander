import { SEARCH_USERS } from '../actions/user_actions';
import { merge } from "lodash";

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SEARCH_USERS:
            return action.users 
        default:
            return state;
    }
};

export default searchReducer; 