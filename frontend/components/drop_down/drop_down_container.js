import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removePost } from '../../actions/post_actions';
import DropDown from './drop_down';

const msp = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id]
    });
};

const mdp = dispatch => ({
    deletePost: post => dispatch(removePost(post))
});

export default withRouter(connect(msp, mdp)(DropDown));