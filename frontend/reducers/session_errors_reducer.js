import { RECIVE_SESSION_ERORS, RECEIVE_CURRENT_USER }  from "../actions/session_actions";

const sesisonErrorsReducer = (state = [], action ) => {
    const oldState = Object.freeze(state);
    switch(action.type) {
        case RECIVE_SESSION_ERORS:
            return action.errors 
        case RECEIVE_CURRENT_USER:
            return [];
        default: 
            return state; 
    }
}

export default sesisonErrorsReducer;