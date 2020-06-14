import React from 'react';
import TodoItem from '../todo-item/todoItem.component';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PostAddIcon from '@material-ui/icons/PostAdd';
import './todoContainer.styles.scss'
import { itemPerTodoList } from '../../assets/todo.variables';
import { todoItemPageDown, todoItemPageUp } from '../../redux/todo/todo.action';

export const TodoContainer = ({ todoItems, todoPage, pageUp, pageDown }) => {

    if (todoItems.slice(itemPerTodoList*(todoPage-1), itemPerTodoList*(todoPage)).length === 0 ){
        pageDown();
    }
    return (
        <Paper className="container todo-container" style={{
            height: todoItems.length >= itemPerTodoList ? "230px": null
        }}>
            <PostAddIcon
                color="primary"
                className="inputButton" onClick={() => {
                    document.getElementById('inputContainer').style.display = "flex";
                }} >
                add
                </PostAddIcon>
            <h3 className="todo-title"> <span role="img" aria-label="emoji">🔥</span> Crush Them </h3>
            <ul className="todo-items">
                {todoItems.slice(itemPerTodoList * (todoPage - 1), itemPerTodoList * (todoPage)).map(item =>
                    <TodoItem key={item.id} item={item} isLive={1} />
                )}
            </ul>

            {todoItems.length >= itemPerTodoList ?
                <div className="todo-pagenation">
                    <ArrowBackIosIcon className="pagenationButton" onClick={() => { pageDown() }} />
                    {todoPage} / {Math.ceil(todoItems.length / itemPerTodoList)}
                    <ArrowForwardIosIcon className="pagenationButton" onClick={() => { pageUp() }} />
                </div>
                : null
            }

        </Paper>
    )
}

const mapStateToProps = state => ({
    todoItems: state.todoItem.todoItems,
    todoPage: state.todoItem.todoPage
})

const mapDispatchToProps = dispatch => ({
    pageUp: () => { dispatch(todoItemPageUp()) },
    pageDown: () => { dispatch(todoItemPageDown()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);



