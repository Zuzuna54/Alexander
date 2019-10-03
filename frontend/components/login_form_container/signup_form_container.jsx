import { connect }  from "react-redux";
import React from "react";
import { signup } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";

const msp = state => ({
    errors: state.errors.session,
    formType: " Sign up",
    navLink: <Link to="/login"> Log in</Link>
});

const mdp = dispatch => ({
    processFrom: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);