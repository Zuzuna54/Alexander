import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'; 
import LikeBar from './like_bar'; 
import { createLike, removeLike} from '../../actions/like_actions'; 

const mapSTP = (state, ownProps) => {
    let postLikes = state.entities.posts[ownProps.postId].like_ids; 
    let filteredLikes = Object.values(state.entities.likes).filter( like => 
        postLikes.includes(like.id));

    return({
        likes: filteredLikes, 
        likers: state.entities.posts[ownProps.postId].likers,
        currUser: state.session.id
    });
};

const mapDTP = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    removeLike: like => dispatch(removeLike(like))
});

export default withRouter(connect(mapSTP, mapDTP)(LikeBar));