import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const likesReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_ALL_POSTS: 
            if (action.posts.likes === undefined) {
                return state; 
            } else {
                return action.posts.likes; 
            }
        case RECEIVE_POST: 
            console.log(action)
            return merge({}, state, action.post.likes); 
        case RECEIVE_LIKE: 
            return merge({}, state, { [action.like.id]: action.like }); 
        case REMOVE_LIKE: 
            let newState = merge({}, state);
            delete newState[action.like.id];
            return newState; 
        default: 
            return state; 
    }
};

export default likesReducer; 