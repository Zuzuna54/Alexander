import React from  "react";
import DropDownContainer from "../drop_down/drop_down_container";
import LikeBarContainer from '../likes/like_bar_container';
import CreateCommentFormContainer from "../comments/create_comment_form_container";
import CommentIndexContainer from "../comments/comment_index_container";
import { Link } from "react-router-dom";

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
        const id = this.props.post.id
        $(`.dropdown-${id}`).click(function () {
        $('.dropdown-container').removeClass('out');
        $(`.dropdown-container-${id}`).addClass("five");
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
        let id;
        if(this.props.user !== undefined) {
            username = this.props.user.username
            id = this.props.user.id
        }
        return (
        <>
            <div className="post-box">
                <div className="post-header">
                    <div className="user-info">
                        <Link to={`/profile/${id}`}>
                            <img className="user-picture" src="https://pngimage.net/wp-content/uploads/2018/05/default-user-png-2.png" alt=""/>
                        </Link>  
                        <div>
                        <div>{username ? username : (<> </>)}</div>
                        <div className="location">{this.props.post.location}</div>
                        </div>
                    </div>
                        <div className={`dropdown dropdown-${this.props.post.id}`}>
                        <img onClick={this.handleDropDown} src={window.menu_bar}/>
                    </div>
                </div>
                <div className="post-picture" >
                    <Link to={`/post/${this.props.post.id}`} >
                        <img className="display-picture" src={this.props.post.photoUrl} />
                   </Link>
                </div>
                <div className="funk-box">
                    <div className="post-bottom">
                        <LikeBarContainer postId={this.props.post.id} />
                        <div className="caption">
                            {this.cropCaption()}
                        </div>
                        <CommentIndexContainer post={this.props.post} />
                        <CreateCommentFormContainer
                            postId={this.props.post.id} />
                    </div>
                </div>
            </div>
            <DropDownContainer post={this.props.post} />
        </>
        )
    }
}

export default PostsIndexItem;