import React from "react";
import SearchBarContainer from "../search_bar/search_bar_container";
import PostFormContainer from "../post_form/post_form_container";
import { Link } from "react-router-dom"

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        // console.log(this.props)
        this.handleLogout = this.handleLogout.bind(this)
        this.routeChange = this.routeChange.bind(this)
        this.handleCreate = this.handleCreate.bind(this)

    }

    handleLogout() {
        this.props.logout();
    }

    routeChange() {
        let path = `/posts`;
        console.log(this.props)
        this.props.history.push(path);
    }

    handleCreate() {
        $('.create').click(function () {
            var buttonId = $(this).attr('id');
            $('#modal-container').removeAttr('class').addClass(buttonId);
            $('body').addClass('modal-active');
        })
    }

    render() {
        return (
            <nav id ="navbar">
                <Link to="/posts">
                <div className="logo">
                    <div>
                        <img className="sub-logo" src={window.logo} />
                    </div> 
                    <div id="sublogo-text">
                        Alexander
                    </div>
                </div>
                </Link>    
                <SearchBarContainer />
                <div className="nav-menu">
                    <div className="logout">
                        <img onClick={this.handleLogout} className="logout-button" 
                        src={window.action} />
                    </div>
                    <div className="profile">
                        <Link to={`/profile/${this.props.user.id}`}>
                            <img className="profile" src={window.profile}/>
                        </Link>
                    </div>
                    <div className ="add-post">
                        <div id="one" className="create">   
                            <img onClick={this.handleCreate} className="add-post" src={window.add} />
                        </div>
                        <PostFormContainer />
                    </div>
                    <div className="dsicover-cont">
                        <img className="discover" src={window.discover} />
                    </div>
                </div>   
            </nav>
          
        )
    }
}

export default NavBar;
