import { fetchAllPosts } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchUsers } from "../../actions/user_actions"

const msp = state =>{  
    return ({
        posts: state.entities.posts,
        users: state.entities.users
    })
}

const mdp = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAllPosts: () => dispatch(fetchAllPosts())

})

export default connect(msp, mdp)(PostIndex); 