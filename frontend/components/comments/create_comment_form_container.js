import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CreateCommentForm from "./create_comment_form"

const mdp  = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
})

export default connect(null, mdp)(CreateCommentForm);