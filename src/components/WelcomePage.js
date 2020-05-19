import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Welcome extends Component {

    render() {
        return (
            <div className="container">
                <h1>Welcome {sessionStorage.getItem('authenticatedUser')}</h1>
                <br/>
                Check your todo list <Link to="/todos">here</Link>
            </div>
        )
    }
}

export default Welcome