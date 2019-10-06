import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import merge from "lodash";

const postsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    let newState = merge({}, state);
    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts.posts || {};
        case RECEIVE_POST:
            return merge({}, state, { [action.post.post.id]: action.post.post });
        case REMOVE_POST:
            delete newState[action.post.id];
            return newState;
        default:
            return state; 
    }
}


export default postsReducer;