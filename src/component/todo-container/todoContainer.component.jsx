import React from 'react';
import TodoItem from '../todo-item/todoItem.component';
import { connect } from 'react-redux';

export const TodoContainer = ({ todoItems }) => {
    return (
        <div className="todo-container">
            <ul className="todo-items">
                {todoItems.map(item =>
                    <TodoItem key={item.id} item = {item} isLive={1} />
                )}
            </ul>
        </div>
    ) 
}

const mapStateToProps = state => {
    return({
    todoItems: state.todoItem.todoItems
})}

export default connect(mapStateToProps)(TodoContainer);



