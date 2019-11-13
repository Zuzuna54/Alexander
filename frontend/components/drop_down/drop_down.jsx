import React from "react";
import { NavLink } from "react-router-dom";

class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.closeDropdown = this.closeDropdown.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.handleRoute = this.handleRoute.bind(this);
        // this.renderDelete = this.renderDelete.bind(this);
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

    handleRoute() {
        this.props.history.push(`/post/${this.props.post.id}`)
    }
    

    render() {
        
        let { currentUser, post } = this.props;
        let deleteButton;
        console.log(this.props.post.id)

        if (post.user_id === currentUser.id) {
            deleteButton = (<div onClick={this.deletePost} > Delete </div>)
        } else {
            deleteButton = null;
        }
  
        return (
            <div id={`dropdown-container`}>
                <div onClick={this.closeDropdown} className="dropdown-background">
                    <div className="modal">
                        <div> this is a dropdown </div>
                            <div onClick={this.handleRoute}>
                                Go to Post
                            </div>
                        {deleteButton}
                    </div>
                </div> 
            </div>
        )
    }
} 

export default DropDown;