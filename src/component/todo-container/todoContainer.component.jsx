import React from 'react';
import TodoItem from '../todo-item/todoItem.component';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

import './todoContainer.styles.scss'

export const TodoContainer = ({ todoItems }) => {
    return (
        <Paper className="container todo-container">
            <h3 className="todo-title">Crush Them</h3>
            <ul className="todo-items">
                {todoItems.map(item =>
                    <TodoItem key={item.id} item = {item} isLive={1} />
                )}
            </ul>
        </Paper>
    ) 
}

const mapStateToProps = state => {
    return({
    todoItems: state.todoItem.todoItems
})}

export default connect(mapStateToProps)(TodoContainer);



