import { connect } from "react-redux";
import CommentIndexItem from "./comment_index_item";
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
    let tempUser;
    if (ownProps.comment === undefined) {
        tempUser = undefined;
    } else {
        tempUser = state.entities.users[ownProps.comment.user_id];
    }
  
    return {
        user: tempUser,
        currentUserId: state.session.id
    };
};

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
});

export default connect(msp, mdp)(CommentIndexItem);