import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const REMOVE_POST_ERRORS = 'REMOVE_POST_ERRORS';

const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

const deletePost = post => ({
    type: REMOVE_POST,
    post
});

export const removePostErrors = () => ({
    type: REMOVE_POST_ERRORS
});

export const receivePostErrors = postErrors => ({
    type: RECEIVE_POST_ERRORS,
    postErrors
});

export const fetchAllPosts = () => dispatch => (
    PostAPIUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)))
    .fail(error => dispatch(receivePostErrors(error.responseJSON)))
);

export const fetchPost = id => dispatch => (
    PostAPIUtil.fetchPost(id).then(payload => dispatch(receivePost(payload)))
    .fail(error => dispatch(receivePostErrors(error.responseJSON)))
);

export const removePost = post => dispatch => (
    PostAPIUtil.deletePost(post.id).then(() => dispatch(deletePost(post)))
);

export const updatePost = post => dispatch => (
    PostAPIUtil.updatePost(post).then(updated => dispatch(receivePost(updated)))   
    .fail(error => dispatch(receivePostErrors(error.responseJSON)))   
);

export const createPost = post => dispatch => (
    PostAPIUtil.createPost(post).then(newPost => dispatch(receivePost(newPost)))   
    .fail(error => dispatch(receivePostErrors(error.rerroresponseJSON)))  
);