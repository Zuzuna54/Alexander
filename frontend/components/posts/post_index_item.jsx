import React from  "react";




class PostsIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        
        console.log(this.props)
        return (
        <div className="feed">

            <div className="post-box">
                <div className="post-header">
                    <div className="user-info">
                        <img className="user-picture" src="https://pngimage.net/wp-content/uploads/2018/05/default-user-png-2.png" alt=""/>
                        <div>
                        {this.props.user.username }
                        </div>
                    </div>
                    <img src={window.menu_bar}/>
                </div>
                <div className="post-picture">
                        <img src={ window.main_prop } />
                </div>
                <div className="funk-box">
                    <div className="likes-bar">
                        <div>
                            left 
                        </div>
                        <div>
                            right
                        </div>
                    </div>
                    <div className="likes-info">
                        this is likes info
                    </div>
                    <div className="comment-box">
                        <div>
                            {this.props.post.caption}
                        </div>
                        <div>
                            all comments
                        </div>
                        <div>
                            last 2 comments
                        </div>
                    </div>
                    <div className="comment-timer">
                        {this.props.post.created_at}
                    </div>
                    <div className="add-comment">
                        add commnet goes here
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default PostsIndexItem;