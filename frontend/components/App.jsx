import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Switch } from "react-router-dom";
import LogInFormContainer from "./login_form_container/login_form_container";
import SignUpFormContainer from "./login_form_container/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PostIndexContainer from "./posts/post_index_container";
import ProfileContainer from './profile/profile_container';
const App = () => (
    <div>
       
    <Switch >
        <AuthRoute exact path="/" component={GreetingContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
    </Switch>

    <Switch>
        <ProtectedRoute exact path="/posts" component={PostIndexContainer} />
        <ProtectedRoute path='/profile/:id' component={ProfileContainer} />
        <ProtectedRoute path='/posts' component={PostIndexContainer} />
    </Switch>
    </div>
)

export default App;