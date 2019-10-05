import React from "react";
import PostIndex from "../posts/post_index";
class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    componentDidMount(){
        this.props.fetchAllPosts().then(res => {
            this.setState({ posts: res.posts });
        })
    }

    render () {
        return (
            <div>
                <PostIndex posts={this.state.posts}/>
            </div>
        )
    }
}

export default Feed;