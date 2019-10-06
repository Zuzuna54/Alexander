import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer"

const entitiesRecducer = combineReducers({
    users: usersReducer,
    posts: postsReducer

});

export default entitiesRecducer;