import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SEARCH_USERS = 'SEARCH_USERS';


const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});
const searchUser = users => ({
    type: SEARCH_USERS,
    users
});

export const fetchUsers = () => dispatch => (
    UserAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
)

export const fetchUser = id => dispatch => {
    return UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
};

export const searchUsers = username => dispatch => {
    return UserAPIUtil.searchUsers(username).then(users => dispatch(searchUser(users)));
};

export const updateUser = user => dispatch => (
    UserAPIUtil.updateUser(user).then(user => (
        dispatch(receiveUser(user))
    ))
);

