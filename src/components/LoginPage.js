import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state =
            {
                username:'ArisPoz',
                password:'123',
                successfulLogin: false,
                isLoginClicked: false
            }

        this.changeHandler = this.changeHandler.bind(this)
        this.loginButtonClicked = this.loginButtonClicked.bind(this)
    }

    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <div className="container">
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                    <button className="btn btn-success" onClick={this.loginButtonClicked}>Login</button>

                    <div className="LoginMessage">
                        {this.showLoginMessage(this.state.successfulLogin)}
                    </div>
                </div>
            </div>
        )
    }

    loginButtonClicked() {
        this.setState({ 
            isLoginClicked: true,
            successfulLogin:
                (this.state.username === 'ArisPoz' && this.state.password === '123') ? true : false
        })
    }

    showLoginMessage(isLoginSuccessful) {
        if(this.state.isLoginClicked) {
            if(isLoginSuccessful) {
                AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password)
                this.props.history.push("/welcome")
            }
            else return <h3 className="alert alert-warning">Login Failed</h3>
        }
    }

    changeHandler(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
}

export default Login