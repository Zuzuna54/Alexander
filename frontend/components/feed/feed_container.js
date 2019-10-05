import { connect } from "react-redux";
import Feed from "./feed";
import React from "react";
import { fetchAllPosts } from "../../actions/post_actions"

const msp = state => {
    const posts = state.entities.posts;
    return { posts };
}

const mdp = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts())
})

export default connect(msp, mdp)(Feed);