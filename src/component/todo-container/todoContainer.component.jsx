import React from 'react';
import TodoItem from '../todo-item/todoItem.component';
import { connect } from 'react-redux';

export const TodoContainer = ({ todoItems }) => {
    return (
        <div className="todo-container">
            <ul className="todo-items">
                {todoItems.map(item =>
                    <TodoItem key={item.id} name={item.name} pomoCount={item.pomoCount} />
                )}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    todoItems: state.todoItem.todoItems
})

export default connect(mapStateToProps)(TodoContainer);