
import React from 'react';
import NavBarContainer from "../nav_bar/nav_bar_container"

class PostIndex extends React.Component { 
    constructor(props){
        super(props)
        this.state = { posts: this.props.posts }
        console.log(this.state)
    }

  

    render(){
       
        console.log(this.props.posts)
        return (
            <div>
            <NavBarContainer /> 
           
            <div className="feed"> 
               
                <div className="post-box">
                    <div className="post-header">
                        this is post header 
                    </div>
                    <div className="post-picture">
                        this is phost picture
                    </div>
                    <div className="funk-box">
                        <div className="likes-bar">
                            this is likes bar
                        </div>
                        <div className="likes-info">
                            this is likes info
                        </div>
                        <div className="comment-box">
                            this is comments box
                        </div>
                        <div className ="comment-timer">
                            this is comment timer
                        </div>
                        <div className="add-comment">
                            add commnet goes here
                        </div>
                    </div>
                </div>
                </div>
        
            </div>)

    }
}

export default PostIndex;