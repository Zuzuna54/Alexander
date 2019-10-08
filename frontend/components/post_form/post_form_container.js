import { connect } from "react-redux"
import { createPost } from "../../actions/post_actions";
import { withRouter } from "react-router-dom";
import  PostFrom from "./post_form"

const msp = state => ({
    errors: state.errors.posts,
    post: {
        location: "",
        caption: "",
        photo: null
    }
})

const mdp = dispatch => ({
    action: post => dispatch(createPost)
})

export default withRouter(connect(msp, mdp)(PostFrom))