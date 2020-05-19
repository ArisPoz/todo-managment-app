import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from "./LoginPage"
import Logout from "./LogoutPage"
import Welcome from "./WelcomePage"
import Error from "./ErrorPage"
import Todos from "./Todos"
import AuthenticatedRoute from './AuthenticatedRoute'
import Header from "./Header"
import Footer from "./Footer"

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Header/>
                        <Switch>
                            <Route path="/" exact component={Login}/>
                            <Route path="/login" component={Login}/>
                            <AuthenticatedRoute path="/logout" component={Logout}/>
                            <AuthenticatedRoute path="/welcome" component={Welcome}/>
                            <AuthenticatedRoute path="/todos" component={Todos}/>
                            <Route component={Error}/>
                        </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}

export default TodoApp