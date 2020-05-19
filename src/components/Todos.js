import React, {Component} from 'react'

class Todos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos : 
            [
                {id:1, description: "Learn React", targetDate: new Date(), isCompleted: false},
                {id:2, description: "Learn SpringBoot", targetDate: new Date(), isCompleted: false},
                {id:3, description: "Become Full Stack", targetDate: new Date(), isCompleted: false},
                {id:4, description: "Learn Ruby", targetDate: new Date(), isCompleted: false},
                {id:5, description: "Learn Scala", targetDate: new Date(), isCompleted: false}
            ]
        }
    }

    render() {
        return (
            <div className="Todos">
                <h1>Todo List</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>DeadLine</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map( todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toLocaleDateString()}</td>
                                        <td>{todo.isCompleted.toString()}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Todos