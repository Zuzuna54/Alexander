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
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleUpdate(field) {
        return ((event) => {
            this.setState({ [field]: event.target.value })
        })
    }



    handleSubmit(e) {
        const user = Object.assign({}, this.state);
        this.props.processFrom(user);
    }

    renderErrors() {
        // debugger
        const errors = this.props.errors.map(error => (
            <li key={error}>
                {error}
            </li>
        ))

        return (
            <ul>
                {errors}
            </ul>
        )
    }
    
    render() {   
        const sessionLinks = () => (
            <div>
            <div className ="splash-page">
                <div className="splash-photos"> 
                    <img src={window.splash1}/>
                </div>
                <div className="session-container">
                <div className="signup-container">
                <form onSubmit={this.handleSubmit} className="login-box">   
                <h1 className="Alexander"><Link to="/">Alexander</Link></h1>
                    <br />
                    <p className="greeting-mesage">Sign up to see photos from your friends.</p>
                         
                    <div className="login-form">
                    <br />
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
                </div>
                    <nav className="underbox">
                        <p>Already Have an account?   </p>
                        <Link className="login-link" to="/login">Log in</Link>
                    </nav>  
                <div className="app-links">
                    <p>Get the real app</p>
                    <div>
                    <img src={window.app1} />
                    <img src={window.app2} />
                    </div>
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
        // debugger
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