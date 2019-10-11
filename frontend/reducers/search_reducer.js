import { RECEIVE_USERS } from '../actions/user_actions';
import { merge } from "lodash";

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS:
            console.log(state)
            console.log(action.users)
            console.log(merge({}, state, { entities: action.users}))
            return action.users;
        default:
            return state;
    }
};

export default searchReducer; 