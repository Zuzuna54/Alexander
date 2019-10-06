import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer"
import searchReducer from "./search_reducer"
import commentsReducer from "./comments_reducer"

const entitiesRecducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    search: searchReducer,
    comments: commentsReducer
});

export default entitiesRecducer;