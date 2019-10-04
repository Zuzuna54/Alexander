
import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container"

class PostIndex extends React.Component { 
    constructor(props){
        super(props)
        this.posts = this.props.posts
    }

    componentDidMount(){
        this.props.fetchAllPosts()
    }

    render(){
        return (
            <div>
            <NavBarContainer /> 
            <h1>these are posts</h1> 
            </div>)

    }
}

export default PostIndex;