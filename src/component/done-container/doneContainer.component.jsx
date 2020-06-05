import React from 'react'
import TodoItem  from '../todo-item/todoItem.component'
import { connect } from 'react-redux'

export const DoneContainer = ({doneItems})=>{
    return(
        <div className="done-container">
            <ul className="done-items">
            {doneItems.map(item =>
                    <TodoItem key={item.id} item = {item} />
                )}
            </ul>
        </div>
    )
}

const matStateToProps = state =>({
    doneItems: state.todoItem.doneItems
})

export default connect(matStateToProps)(DoneContainer);