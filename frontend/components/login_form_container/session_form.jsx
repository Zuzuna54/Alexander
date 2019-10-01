import React from "react"


class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
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
    
        return (
        <div className="login-container">
            <form onSubmit={this.handleSubmit} className="login-box">
                Welcome to Alexander!
                <br/>
                <h3> Please {this.props.formType}</h3> or {this.props.navLink}
                {this.renderErrors()}
                <div className="login-form">
                    <br/>
                    <label> Username:
                        <input className="login-info" type="text" onChange={this.handleUpdate('username')}/>
                    </label>
                    <br/>
                    <label> Password:
                        <input className="password-info" type="password" onChange={this.handleUpdate('password')}/>
                    </label>
                    <br/>
                    <input className="submit-button" type="submit" value={this.props.formType}/>
                </div>
            </form>

        </div>
        )
    }
}


export default SessionForm;
