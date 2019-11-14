import { connect } from 'react-redux'; 
import Profile from './profile';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { fetchAllPosts } from '../../actions/post_actions';
import { createFollow, deleteFollow } from '../../actions/followings_actions'


const mapSTP = (state, ownProps) => {
    const profileId = ownProps.match.params.id
    const profileUser = state.entities.users[profileId]
    let userPosts = null;
    let followerIds = null;
    let followStatus = false;
    let user = state.entities.users[state.session.id];
    let posts;
    if (profileUser) {
        userPosts = Object.values(state.entities.posts)
            .filter(post => post.user_id === profileUser.id),
            followerIds = profileUser.followerIds,
            followStatus = (followerIds.includes(user.id))
    }
    if ( profileUser) {
        posts = profileUser.postIds.map(
            id => state.entities.posts[id]
        );
    } else {
        posts = [ undefined ];
    }


    
    return ({
        user,
        posts,
        profileUser,
        followerIds,
        followStatus
    });
};

const mapDTP = dispatch => ({
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchUsers: () => dispatch(fetchUsers())
    
}); 

export default connect(mapSTP, mapDTP)(Profile);
