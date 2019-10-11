import { connect } from "react-redux";
import Feed from "./feed";
import React from "react";
import { fetchAllPosts } from "../../actions/post_actions"
import { fetchUsers } from "../../actions/user_actions"

const msp = state => {
    // debugger
    const posts = state.entities.posts;
    const users = state.entities.users;
    return { posts, users };
}

const mdp = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchAllPosts: () => dispatch(fetchAllPosts())
})

export default connect(msp, mdp)(Feed);