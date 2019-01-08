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
                    id: 1,
                    text: "get up from bed",
                    completed: true
                }
            ]
        }
    }

    render() {
        let todoComponents = this.state.todos.map( item => <TodoItem id={item.id} item={item} /> )
        return (
            <section role="list">
                {todoComponents}
            </section>
        )
    }
}

export default TodoList