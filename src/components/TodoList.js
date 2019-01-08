import React, {Component} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

    constructor() {
        super()
        this.state = {
            todos: [
                {
                    id: 1,
                    text: "take the garbage",
                    completed: false
                },
                {
                    id: 2,
                    text: "do the laundry",
                    completed: false
                },
                {
                    id: 3,
                    text: "get up from bed",
                    completed: true
                }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        let newTodos = this.state.todos.map( item => {
                if (id === item.id) {
                    return {
                        id: item.id,
                        text: item.text,
                        completed: !item.completed
                    }
                }
                return item
            })
        
        this.setState({todos: newTodos})
    }

    render() {
        let todoComponents = this.state.todos.map( item => <TodoItem 
            handleChange = {this.handleChange}
            key={item.id} 
            item={item} /> )
        return (
            <div className="container">
                <section role="list">
                    {todoComponents}
                </section>
            </div>
        )
    }
}

export default TodoList