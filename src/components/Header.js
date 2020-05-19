import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'
import { withRouter } from 'react-router';

class Header extends Component {
    render() {

        const isUserAuthenticated = AuthenticationService.isUserAuthenticated()

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><Link to="/welcome" className="navbar-brand">Todo Managment App</Link></div>
                    <ul className="navbar-nav">
                        {isUserAuthenticated && <li><Link to="/welcome" className="nav-link">Home</Link></li>}
                        {isUserAuthenticated && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserAuthenticated && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        {isUserAuthenticated && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header)