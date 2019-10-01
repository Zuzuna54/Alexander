import React from "react";
import { Link } from "react-router-dom";

const Greeting = ( { currentUser, logout } ) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Log in</Link>
            <br/>
            <Link to="/signup">Sign Up</Link>
        </nav>
    )
    
    const personalGreeting = () => (
        <div className="header=group">
            <h2 className="greeting">Hi, {currentUser.username}</h2>
            <button className="greeting-button" onClick={logout}>Log Out</button>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;