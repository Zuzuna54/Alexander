
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
            this.setState({ posts: res.posts });
        })
        this.props.fetchUsers().then(res => {
            this.setState({ users: res.users })
        })
    }

    // componentDidUpdate() {
    //     if (this.state.posts !== this.props.posts) {
    //         this.setState({ posts: this.props.posts })
    //     }
    // }

    render(){ 
        console.log(this.state)  
        console.log(this.props)    
        let posts = 0;
        if (this.state.posts !== undefined) {  
            posts = Object.values(this.props.posts.AllPosts) 
        }
        let allPosts;
        if(posts) {
            allPosts = posts.map((post => {
                const user = this.props.users[post.user_id]
                return <PostIndexItemContainer 
                key={post.id}
                user={user}
                post={post}
                />
            })) 
        }
       
            return (
                <div className="page">
                <NavBarContainer /> 
                <div className="feed">
                {allPosts}
                </div>
                </div>
        )
    } 
}

export default PostIndex;