import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'; 
import LikeBar from './like_bar'; 
import { createLike, removeLike} from '../../actions/like_actions'; 

const mapSTP = (state, ownProps) => {

    let postLikes = [];
    if (state.entities.posts[ownProps.postId] !== undefined) {
        postLikes = state.entities.posts[ownProps.postId].like_ids;
    } 
    let filteredLikes = Object.values(state.entities.likes).filter( like => 
        postLikes.includes(like.id));
    let likers = []; 
    if (state.entities.posts[ownProps.postId] !== undefined) {
        likers = state.entities.posts[ownProps.postId].liker_ids;
    }    
    return({
        likes: filteredLikes, 
        likers: likers,
        currUser: state.session.id
    });
};

const mapDTP = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    removeLike: like => dispatch(removeLike(like))
});

export default withRouter(connect(mapSTP, mapDTP)(LikeBar));