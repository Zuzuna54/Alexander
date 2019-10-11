
import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container"
import PostIndexItemContainer from "./post_index_item_container"

class PostIndex extends React.Component { 
    constructor(props){
        super(props)
        this.state  = {
            posts: undefined,
            users: {}
        }
    }

    componentDidMount() {
        this.props.fetchAllPosts().then(res => {

            this.setState({ posts: res.posts.AllPosts || {}});
        })
        this.props.fetchUsers().then(res => {
            this.setState({ users: res.users })
        })
    }

    componentDidUpdate(prevProps){
   
        if(prevProps.posts !== this.props.posts) {

            this.setState({posts: this.props.posts})
        }
    }


    render(){   
     
        let allPosts = [];
        if(this.state.posts !== undefined) {
            allPosts = Object.values(this.state.posts)
        }

 
        const posts = allPosts.map((post => {
                const user = this.props.users[post.user_id]
            
                return <PostIndexItemContainer 
                key={post.id}
                user={user}
                post={post}
                />
            })) 
      
            return (
                <div className="page">
                <NavBarContainer /> 
                <div className="feed">
                {posts}
                </div>
                </div>
        )
    } 
}

export default PostIndex;