
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
            // console.log(res)
            this.setState({ posts: res.posts.AllPosts || {}});
        })
        this.props.fetchUsers().then(res => {
            this.setState({ users: res.users })
        })
    }

    componentDidUpdate(ownProps){
        // console.log(ownProps)
        // console.log(this.state)
    }


    render(){   
        
        let allPosts = [];
        if(this.state.posts !== undefined) {
            // console.log(this.state)
            // console.log(Object.values(this.state))
            allPosts = Object.values(this.state.posts)
            // debugger
        }
        
        // console.log(allPosts)

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