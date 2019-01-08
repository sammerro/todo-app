import React, {Component} from 'react'
import './TodoItem.css'


class TodoItem extends Component {

    
    render() {
        let styleClass = 'todo-item'
        if (this.props.item.completed) {
            styleClass =  styleClass + ' todo-item--completed'
        }

        return (
            <div role="listitem" className={styleClass} onClick={ () => {
                this.props.handleChange(this.props.item.id)
                } }>
                
                <p> {this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem