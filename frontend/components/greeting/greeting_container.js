import { connect } from "react-redux";
import { logout, signup, clearSessionErrors, login } from "../../actions/session_actions";
import Greeting from "./greetig";
import React from "react";
import { Link } from "react-router-dom"

const msp = state => {
    const session = state.session;
    const users = state.entities.users;
    const errors = state.errors.session;
    const formType = "Sign Up";
    const navLink = (<Link to="/login"> Log in if you alrady signed up! </Link>);
    const currentUser = state.entities.users[session.id]
    return ({currentUser, errors, formType, navLink})
}


const mdp = dispatch => ({
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    logout: () => dispatch(logout()),
    processFrom: user => dispatch(signup(user)),
    procesDemo: user => dispatch(login(user))

})


export default connect(msp, mdp)(Greeting);