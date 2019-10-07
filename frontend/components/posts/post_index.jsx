
import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container"
import PostIndexItemContainer from "./post_index_item_container"

class PostIndex extends React.Component { 
    constructor(props){
        super(props)
    }

   
  

    render(){
        let posts = [];
        if (this.props.posts === undefined) {
            posts = [];
        } else {
            const postsObj = Object.values(this.props.posts.AllPosts)
            posts = Object.values(postsObj); 
        }

        const allPosts = posts.map((post => {
            const user = this.props.posts.users[post.user_id]
            return <PostIndexItemContainer 
            key={post.id}
            user={user}
            post={post}
            />
        }))
            return (
                <div>
                <NavBarContainer /> 
                {allPosts}
            </div>
        )
    }
    
}

export default PostIndex;