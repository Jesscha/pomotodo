import React from 'react';
import TodoItem from '../todo-item/todoItem.component';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './todoContainer.styles.scss'

export class TodoContainer extends React.Component  {
    constructor(props){
        super(props);
        this.state ={
            page: 1
        }

    }



    render (){
        return (
            <Paper className="container todo-container">
                <h3 className="todo-title">Crush Them!</h3>
                <ul className="todo-items">
                    {this.props.todoItems.map(item =>
                        <TodoItem key={item.id} item = {item} isLive={1} />
                    )}
                </ul>
                <div className="todo-pagenation">
                <ArrowBackIosIcon/>
                    00/00
                <ArrowForwardIosIcon/>
                </div>
            </Paper>
        ) 
    }
    
}

const mapStateToProps = state => {
    return({
    todoItems: state.todoItem.todoItems
})}

export default connect(mapStateToProps)(TodoContainer);



