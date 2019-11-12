import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions'; 
import { RECEIVE_USER } from "../actions/user_actions"
import { merge } from "lodash";

const postsReducer = (state = {}, action) => {
    const oldState = Object.freeze(state);
    let newState = merge({}, state);
    switch(action.type) {
        case RECEIVE_USER:
            console.log(action.user.posts)
            return merge({}, state, action.user.posts);
        case RECEIVE_COMMENT:
            newState[action.comment.post_id].comment_ids.push(action.comment.id)
            return newState;
        case REMOVE_COMMENT:
            let target = action.comment.id;
            let newCommentIds = newState[action.comment.post_id].comment_ids;
            newCommentIds = newCommentIds.filter(val => val !== target);
            newState[action.comment.post_id].comment_ids = newCommentIds;
            return newState;
        case RECEIVE_ALL_POSTS:
            return action.posts.AllPosts || {};
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