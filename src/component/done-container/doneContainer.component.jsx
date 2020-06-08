import React from 'react'
import TodoItem  from '../todo-item/todoItem.component'
import { connect } from 'react-redux'
import './doneContainer.styles.scss'
import { Paper } from '@material-ui/core'


export const DoneContainer = ({doneItems})=>{
    return(
        <Paper className="container done-container">
            <h3 className="done-title">Dead Enemies</h3>
            <ul className="done-items">
            {doneItems.map(item =>
                    <TodoItem key={item.id} item = {item} isLive={0}/>
                )}
            </ul>
        </Paper>
    )
}

const matStateToProps = state =>({
    doneItems: state.todoItem.doneItems
})

export default connect(matStateToProps)(DoneContainer);