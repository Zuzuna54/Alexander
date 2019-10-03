import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            fullname: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return ( (event) => {
            this.setState({ [field]: event.target.value })
        })
    } 

    componentDidMount() {
        
        this.props.clearSessionErrors();
    }
   
    
    handleSubmit(e) {
        const user = Object.assign({}, this.state);
        this.props.processFrom(user);
    }

    renderErrors() {
       
        const errors = this.props.errors.map(error => (
            <li key={error}>
                {error}
            </li>
        ))

        return (
            <ul className="errors">
                {errors}
            </ul>
        )
    }

    render() {
       
        const logIn = (
            <div className="sep-log-form">
            <div className="session-container">
                <div className="login-container">
                    <h1 className="Alexander"><Link to="/">Alexander</Link></h1>
                    <form onSubmit={this.handleSubmit} className="login-box">
                     
                    <br />

                        <div className="login-form">
                            <br />
                            <label> 
                                <input placeholder="Username" className="log-input" type="text" onChange={this.handleUpdate('username')} />
                            </label>
                            <br />
                            <label>
                                <input placeholder="Password" className="log-input" type="password" onChange={this.handleUpdate('password')} />
                            </label>
                            <br />
                            <input className="submit-button" type="submit" value={this.props.formType} />
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
                    <div className = "underbox">
                    <p >Don't have and acount?<span className="login-link">{this.props.navLink}</span></p> 
                    </div>
                    <div className="app-links">
                        <p>Get the real app</p>
                        <div className="link-photos">
                            <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo"><img src={window.app1} /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source
                                %3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXPxlUwAEAAE7BYcROqbd5bl-TwJy%26utm_
                                content%3Dlo%26utm_medium%3Dbadge"><img src={window.app2} /></a> 
                        </div>
                    </div>   
            </div> 
                <div className="footer">
                    <a className="links" href="https://www.linkedin.com/in/giorgi-giorgobiani-282883153/">LinkedIn</a>
                    <a className="links" href="https://github.com/Zuzuna54">Github</a>
                    <p className="footer-mes">© 2019 INSTAGRAM FROM FACEBOOK</p>
                </div>
            </div>
            
        )

        const signUp = (
            <div className="sep-signup-form">
            <div className="session-container">
                <div className="signup-container">
                    <h1 className="Alexander"><Link to="/">Alexander</Link></h1>
                    <form onSubmit={this.handleSubmit} className="login-box">
                       
                    <br />
                        <div className="login-form">
                            <br />
                            <label > 
                                <input placeholder="Emal" className="log-input" type="text" onChange={this.handleUpdate("email")}/>
                            </label>
                            <br/>
                            <label > 
                                <input placeholder="Full Name" className="log-input" type="text" onChange={this.handleUpdate("fullName")}/>
                            </label>
                            <br/>
                            <label>
                                <input placeholder="Username" className="log-input" type="text" onChange={this.handleUpdate('username')} />
                            </label>
                            <br />
                            <label>
                                <input placeholder="Password" className="log-input" type="password" onChange={this.handleUpdate('password')} />
                            </label>
                            <br />
                            <input className="submit-button" type="submit" value={this.props.formType} />
                                {this.renderErrors()}
                        </div>
                    </form>
                </div>
                    <div className="underbox">
                    <p>Have an account? <span className="login-link">{this.props.navLink} </span></p>
                    </div>
                    <div className="app-links">
                        <p>Get the real app</p>
                        <div className="link-photos">
                            <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo"><img src={window.app1} /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source
                                %3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXPxlUwAEAAE7BYcROqbd5bl-TwJy%26utm_
                                content%3Dlo%26utm_medium%3Dbadge"><img src={window.app2} /></a> 
                        </div>
                    </div>   
            </div>
                <div className="footer">
                    <a className="links" href="https://www.linkedin.com/in/giorgi-giorgobiani-282883153/">LinkedIn</a>
                    <a className="links" href="https://github.com/Zuzuna54">Github</a>
                    <p className="footer-mes">© 2019 INSTAGRAM FROM FACEBOOK</p>
                </div>
            </div>
        )

        if(this.props.formType === " Log in") { 
            return logIn;
        } else {
            return signUp;
        }
        
    }
}


export default SessionForm;
