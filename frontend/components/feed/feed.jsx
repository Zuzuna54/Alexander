import React from "react";
import PostIndex from "../posts/post_index";
import { isEqual } from "lodash"
class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: {},
            posts: {}
         }
    }

    componentDidMount(){
        this.props.fetchAllPosts().then(res => {
            this.setState({ posts: res.posts});   
        })
        this.props.fetchUsers().then(res => {
            this.setState({users: res.users})
        })
    }
    componentDidUpdate() {   
        if(this.state.posts !== this.props.posts) {
            this.setState( { posts: this.props.posts } )
        }
    }

    render () {

        if(!isEqual({}, this.state.posts)) {
 

        return (
            <div>
                <PostIndex posts={this.state.posts} users={this.state.users}/>
            </div>
        )
    } else {
        return (<> </>)
    }
    }
}

export default Feed;