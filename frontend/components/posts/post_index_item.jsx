import React from  "react";
import DropDownContainer from "../drop_down/drop_down_container";
import CreateCommentFormContainer from "../comments/create_comment_form_container";
import CommentIndexContainer from "../comments/comment_index_container";

class PostsIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            longCaption: false
        }
        this.cropCaption = this.cropCaption.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        
    }

    handleDropDown() {
        $('.dropdown').click(function () {
        var buttonId = $(this).attr('id');
        $('#dropdown-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('dropdown-active');
        })
    }

    cropCaption() {
        let username;

        if (this.props.user !== undefined) {
            username = this.props.user.username
        }
        let caption = this.props.post.caption
        if (caption.length > 99 && this.state.longCaption === false) {
            return (
                <p>
                    <strong>{username ? username : (<> </>)} </strong>
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
                    <strong>{username ? username : (<> </>)} </strong>
                    {caption}
                </p>
            );
        }
    }

    render () {
        let username;

        if(this.props.user !== undefined) {
            username = this.props.user.username
        }
        return (
        <>
            <div className="post-box">
                <div className="post-header">
                    <div className="user-info">
                        <img className="user-picture" src="https://pngimage.net/wp-content/uploads/2018/05/default-user-png-2.png" alt=""/>
                        <div>
                        <div>{username ? username : (<> </>)}</div>
                        <div className="location">{this.props.post.location}</div>
                        </div>
                    </div>
                    <div id="five" className="dropdown" >
                        <img onClick={this.handleDropDown} src={window.menu_bar}/>
                    </div>
                </div>
                <div className="post-picture">
                    <img src={this.props.post.photoUrl} />
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
                            <CommentIndexContainer post={this.props.post} />
                    </div>
                    <div className="comment-timer">
                        {this.props.post.created_at}
                    </div>
                    <CreateCommentFormContainer post={this.props.post} />
                </div>
            </div>
            <DropDownContainer post={this.props.post} />
        </>
        )
    }
}

export default PostsIndexItem;