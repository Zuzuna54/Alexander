import { connect } from "react-redux";
import { login, clearSessionErrors } from "../../actions/session_actions";
import React from "react";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";

const msp = state => ({
    errors: state.errors.session,
    formType: " Log in",
    navLink: <Link to="/signup">Sign up</Link>
})

const mdp = dispatch => ({
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    processFrom: user => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm);