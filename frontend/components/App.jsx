import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Switch } from "react-router-dom";
import LogInFormContainer from "./login_form_container/login_form_container";
import SignUpFormContainer from "./login_form_container/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PostIndexContainer from "./posts/post_index_container";
import PostShowContainer from './posts/post_show_container';
import ProfileContainer from './profile/profile_container';
import UserUpdateFormContainer from './profile/user_update_form_container';
const App = () => (
    <div>
       
    <Switch >
        <AuthRoute exact path="/" component={GreetingContainer} />
        <AuthRoute path="/login" component={LogInFormContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer}/>
    </Switch>

    <Switch>
        <ProtectedRoute path="/posts" component={PostIndexContainer} />
        <ProtectedRoute path='/profile/:id' component={ProfileContainer} />
        <ProtectedRoute path='/post/:id' component={PostShowContainer} />
        <ProtectedRoute exact path="/edit-profile" component={UserUpdateFormContainer} />
    </Switch>
    </div>
)

export default App;