import React from 'react';
import TodoItem from '../todo-item/todoItem.component';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './todoContainer.styles.scss'
import { itemPerTodoList } from '../../assets/todo.variables';
import { todoItemPageDown, todoItemPageUp } from '../../redux/todo/todo.action';
import { TodoContainerInfo } from '../todo-info/todo-container-info.component';

export const TodoContainer = ({ todoItems, todoPage, pageUp, pageDown }) => {

    if (todoItems.slice(itemPerTodoList * (todoPage - 1), itemPerTodoList * (todoPage)).length === 0) {
        pageDown();
    }
    return (
        <Paper className="container todo-container" style={{
            height: todoItems.length >= itemPerTodoList ? "230px" : null
        }}>
            <h3 className="todo-title"> <span role="img" aria-label="emoji">🔥</span> Crush Them </h3>

            {todoItems.length >= 1 ? 
            <ul className="todo-items">
                {todoItems.map((item, idx) => {
                    if (itemPerTodoList * (todoPage - 1) <= idx &&  itemPerTodoList * (todoPage) > idx ){
                        return (<TodoItem key={item.id} item={item} isLive={true} ishidden={false}/>)
                    } else{
                        return (<TodoItem key={item.id} item={item} isLive={true} ishidden={true} />)
                    }
                }

                )}
            </ul>
            :
            // <TodoContainerInfo/>
            null
            
        
        }
            


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



