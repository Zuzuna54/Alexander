import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECIVE_SESSION_ERORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const reciveSessionErrors = errors => ({
    type: RECIVE_SESSION_ERORS,
    errors
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})



export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))),
    error => (dispatch(reciveSessionErrors(error.responseJSON))))
)

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))),
    error => (dispatch(reciveSessionErrors(error.responseJSON))))
)

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (dispatch(logoutCurrentUser())))
)