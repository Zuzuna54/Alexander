import React from "react";
import Footer from "../footer/footer"
import { Link, withRouter} from "react-router-dom";
import AppLinks from "../app_links/app_links";


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
        const path = "/posts"
        this.props.processFrom(user).then( () =>  { this.props.history.push(path)
        })
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
                    <p >Don't have an acount?<span className="login-link">{this.props.navLink}</span></p> 
                    </div>
                  <AppLinks />   
            </div>
                <Footer />
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
                                <input placeholder="Email" className="log-input" type="text" onChange={this.handleUpdate("email")}/>
                            </label>
                            <br/>
                            <label > 
                                <input placeholder="Full Name" className="log-input" type="text" onChange={this.handleUpdate("fullname")}/>
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
                <AppLinks /> 
            </div>
                <Footer />
            </div>
        )

        if(this.props.formType === " Log in") { 
            return logIn;
        } else {
            return signUp;
        }
        
    }
}


export default withRouter(SessionForm);
