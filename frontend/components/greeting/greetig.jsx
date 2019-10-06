import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            fullname: ""
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleDemo(e) {  
        e.preventDefault(); 
        let user = {
            username: 'GuestUser',
            password: 'password'
        };
        this.props.procesDemo(user).then(() => {
            this.props.history.push('/posts')
        });
    
    }

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    handleUpdate(field) {
        return ((event) => {
            this.setState({ [field]: event.target.value })
        })
    }

    handleSubmit(e) {
        const user = Object.assign({}, this.state);
        const path = "/posts"
        this.props.processFrom(user).then(() => {this.props.history.push(path)
         });
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
        const sessionLinks = () => (
            <div>
            <div className ="splash-page">
                <div className="splash-photos"> 
                    <img className="bottom" src={window.splash1}/>
                    <img className="middle" src={window.splash3}/>
                    <img className="top" src={window.splash2}/>
                </div>
                <div className="session-container">
                <div className="signup-container">
                <form onSubmit={this.handleSubmit} className="login-box">   
                <h1 className="Alexander"><Link to="/">Alexander</Link></h1>
                {/* <br /> */}
                <p className="greeting-mesage">Sign up to see photos from your friends.</p>     
                <div className="login-form">
                <label >
                <input placeholder="Email" className="log-input"
                type="text" onChange={this.handleUpdate("email")} />
                </label>
                <br />
                <label > 
                <input placeholder="Full Name" className="log-input"
                type="text" onChange={this.handleUpdate("fullname")} />
                </label>
                <br />
                <label> 
                <input placeholder="Username" className="log-input"
                type="text" onChange={this.handleUpdate('username')} />
                </label>
                <br />
                <label> 
                <input placeholder="Password" className="log-input"
                type="password" onChange={this.handleUpdate('password')} />
                </label>
                <br />
                <input className="submit-button" type="submit" value={this.props.formType} />
                {this.renderErrors()}                       
                <p>By signing up, you agree to our <br/> Terms, Data Policy and Cookies <br/> Policy .</p>
                </div>             
                </form>
                    <div className='demo-box'>
                    nothing, is displayed
                    <p>OR</p>
                    </div>
                    <p onClick={this.handleDemo}className='demo-button'>
                    <i className="far fa-id-card"></i>Try the Demo Account
                    </p>
                </div>
                <nav className="underbox">
                <p>Already Have an account?   </p>
                <Link className="login-link" to="/login">Log in</Link>
                </nav>  
                <div className="app-links">
                    <p>Get the real app</p>
                    <div className="link-photos">
                    <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo" target="_blank"><img src={window.app1} /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ut
                        m_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXPxlUwAEAAE7BYcROqbd5bl
                        -TwJy%26utm_content%3Dlo%26utm_medium%3Dbadge" target="_blank"><img src={window.app2} /></a> 
                    </div>
                </div>        
            </div>
            </div>
                <div className="footer">
                    <a className="links" href="https://www.linkedin.com/in/gio-giorgobiani-282883153" target="_blank">LinkedIn</a>
                    <a className="links" href="https://github.com/Zuzuna54" target="_blank">Github</a>
                    <p className="footer-mes">© 2019 INSTAGRAM FROM FACEBOOK</p>
                </div>
            </div>
        )
        const personalGreeting = () => (
            <div className="header=group">
                <h2 className="greeting">Hi, { this.props.currentUser.username}</h2>
                <button className="greeting-button" onClick={this.props.logout}>Log Out</button>
            </div>
        )
       
        return this.props.currentUser ? personalGreeting() : sessionLinks();
    }
}

export default Greeting;