import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import AppLinks from '../app_links/app_links';

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
        return (
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
                <AppLinks />
            </div>
            </div>
                <Footer />
            </div>
        )
    }
}

export default Greeting;