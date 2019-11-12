import { connect } from 'react-redux';
import { removePost, updatePost, fetchPost } from '../../actions/post_actions';
import PostShow from './post_show';

const mapSTP = (state, ownProps) => {
    let post = state.entities.posts[ownProps.match.params.id];
    let user =  post ? state.entities.users[post.user_id] : null; 

    return {
        currentUserId: state.session.currentUserId,
        post,
        user
    };
}; 

const mapDTP = dispatch => ({
    fetchPost: id => dispatch(fetchPost(id)),
    removePost: post => dispatch(removePost(post)), 
    updatePost: post => dispatch(updatePost(post))
});

export default connect(mapSTP,mapDTP)(PostShow);