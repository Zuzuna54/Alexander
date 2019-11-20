import 
{ RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER }
 from "../actions/session_actions"

 const defaulState = Object.freeze({ id: null });

 const sessionReducer = (state = defaulState, action) => {
    const oldState = Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            console.log(action)
            return { id: action.user.id };
        case LOGOUT_CURRENT_USER:   
            return defaulState;
        default:
            return state;
    }
 }


 export default sessionReducer;

