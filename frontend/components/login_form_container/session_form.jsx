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
            <ul>
                {errors}
            </ul>
        )
    }

    render() {
       
        const logIn = (
            <div>
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
            </div> 
                <div className="footer">
                    <a className="links" href="https://www.linkedin.com/in/giorgi-giorgobiani-282883153/">LinkedIn</a>
                    <a className="links" href="https://github.com/Zuzuna54">Github</a>
                    <p className="footer-mes">© 2019 INSTAGRAM FROM FACEBOOK</p>
                </div>
            </div>
            
        )

        const signUp = (
            <div>
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
                        </div>
                    </form>
                </div>
                    <div className="underbox">
                    <p>Have an account? <span className="login-link">{this.props.navLink} </span></p>
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
