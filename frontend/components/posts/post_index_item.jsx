import React from  "react";




class PostsIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            longCaption: false
        }
        this.cropCaption = this.cropCaption.bind(this)
    }


    cropCaption() {
        let caption = this.props.post.caption
        if (caption.length > 99 && this.state.longCaption === false) {
            return (
                <p>
                    <strong>{this.props.user.username} </strong>
                    {caption.slice(0, 100) + " ... "}
                    <em style={{ color: '#999999' }}
                        onClick={() => this.setState({ longCaption: true })}>
                        more
                    </em>
                </p>
            );
        } else {
            return (
                <p>
                    <strong>{this.props.user.username} </strong>
                    {caption}
                </p>
            );
        }
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
                        <div>{this.props.user.username}</div>
                        <div className="location">{this.props.post.location}</div>
                        </div>
                    </div>
                    <img src={window.menu_bar}/>
                </div>
                <div className="post-picture">
                        <img src={ window.main_prop } />
                </div>
                <div className="funk-box">
                    <div className="likes-bar">
                        <div className="likes-left">
                            <img src={window.like} />
                            <img src={window.comment} />
                            <img src={window.share} />
                        </div >
                        <div className="likes-right">
                            <img src={window.save} />
                        </div>
                    </div>
                    <div className="likes-info">
                        this is likes info
                    </div>
                    <div className="comment-box">
                        <div>
                            {this.cropCaption()}
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