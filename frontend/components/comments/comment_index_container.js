import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { removeComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    // console.log(comments);
    let comments = ownProps.post.comment_ids.map(
        id => state.entities.comments[id]);

    return {
        comments
    };
};

const mdp = dispatch => ({
    removeComment: id => dispatch(removeComment(id))
});

export default withRouter(connect(msp, mdp)(CommentIndex));