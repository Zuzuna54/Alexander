import { RECIVE_SESSION_ERORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS }  from "../actions/session_actions";

const sesisonErrorsReducer = (state = [], action ) => {
    const oldState = Object.freeze(state);
    // debugger
    switch(action.type) {
        case RECIVE_SESSION_ERORS:
            if (action.errors) {
                return action.errors
            } else {
                return oldState;
            }
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        default: 
            return state; 
    }
}

export default sesisonErrorsReducer;