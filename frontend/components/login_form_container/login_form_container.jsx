import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import React from "react";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";

const msp = state => ({
    errors: state.errors.session,
    formType: "Log in",
    navLink: <Link to="/signup">Sign Up to log in!</Link>
})

const mdp = dispatch => ({
    processFrom: user => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm);