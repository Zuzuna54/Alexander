import React from "react";
import SearchBarContainer from "../search_bar/search_bar_container"

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
        this.routeChange = this.routeChange.bind(this)
    }

    handleLogout() {
        this.props.logout();
    }

    routeChange() {
        let path = `/posts`;
        this.props.history.push(path);
    }

    render() {
        return (
            <nav id ="navbar">
                <div onClick={this.routeChange} className="logo">
                    <div>
                        <img className="sub-logo" src={window.logo} />
                    </div> 
                    <div id="sublogo-text">
                        Alexander
                    </div>
                </div>
                    
                <SearchBarContainer />
                <div className="nav-menu">
                    <div className="logout">
                        <img onClick={this.handleLogout} className="logout-button" 
                        src={window.action} />
                    </div>
                    <div className="profile">
                        <img className="profile" src={window.profile}/>
                    </div>
                    <div className ="add-post">
                        <img className="add-post" src={window.add} />
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