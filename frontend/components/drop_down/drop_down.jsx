import React from "react";
import { NavLink } from "react-router-dom";

class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.closeDropdown = this.closeDropdown.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.renderDelete = this.renderDelete.bind(this);
    }

    closeDropdown() {
        $('#dropdown-container').click(function () {
            $('#dropdown-container').addClass('out');
            $('body').removeClass('dropdown-active');
        });
    }

    deletePost() {
        this.props.deletePost(this.props.post)
    }

    renderDelete() {
        let  { currentUser, post } = this.props;
        // console.log(post.user_id)
        // console.log(currentUser.id)
        return post.user_id === currentUser.id ? (
            <div onClick={this.deletePost} > Delete </div>
            ) : (
             <> </> )
    }

    render() {
        return (
            <div id="dropdown-container">
                <div onClick={this.closeDropdown} className="dropdown-background">
                    <div className="modal">
                        <div> this is a dropdown </div>
                        <div>Go to Post</div>
                        {this.renderDelete()}
                    </div>
                </div> 
            </div>
        )
    }
} 

export default DropDown;