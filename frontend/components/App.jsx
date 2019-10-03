import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Link } from "react-router-dom"
import LogInFormContainer from "./login_form_container/login_form_container"
import SignUpFormContainer from "./login_form_container/signup_form_container"
import { AuthRoute, ProtectedRoute } from "../util/route_util"
 
const App = () => (
    <div>
       
        
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer}/>

    </div>
)

export default App;