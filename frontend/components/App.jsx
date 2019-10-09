import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Switch } from "react-router-dom";
import LogInFormContainer from "./login_form_container/login_form_container";
import SignUpFormContainer from "./login_form_container/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PostIndexContainer from "./posts/post_index_container";
import FeedContainer from "./feed/feed_container";
const App = () => (
    <div>
       
        
        <AuthRoute exact path="/" component={GreetingContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer}/>


    <Switch>
        <ProtectedRoute exact path="/posts" component={PostIndexContainer} />
    </Switch>
    </div>
)

export default App;