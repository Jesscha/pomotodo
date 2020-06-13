import React from 'react'
import TodoItem  from '../todo-item/todoItem.component'
import { connect } from 'react-redux'
import './doneContainer.styles.scss'
import { Paper } from '@material-ui/core'
import { itemPerDoneList } from '../../assets/todo.variables'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { doneItemPageUp, doneItemPageDown } from '../../redux/todo/todo.action'

export const DoneContainer = ({doneItems, donePage, pageUp, pageDown})=>{
    return(
        <Paper className="container done-container"
        style={{
            height: doneItems.length > itemPerDoneList ? "240px": null
        }}
        >
            <h3 className="done-title"> <span role="img" aria-label="emoji"> 💀 </span> Dead Enemies </h3>
            <ul className="done-items">
            {doneItems.slice(itemPerDoneList*(donePage-1), itemPerDoneList*(donePage)).map(item =>
                    <TodoItem key={item.id} item = {item} isLive={0}/>
                )}
            </ul>

            {doneItems.length > itemPerDoneList ?
                <div className="done-pagenation">
                <ArrowBackIosIcon className="pagenationButton" onClick={()=>{pageDown()}}/>
                    {donePage} / {Math.ceil(doneItems.length/itemPerDoneList)}
                <ArrowForwardIosIcon  className="pagenationButton" onClick={()=>{pageUp()}} />
                </div>
                : null
            }
            
        </Paper>
    )
}

const matStateToProps = state =>({
    doneItems: state.todoItem.doneItems,
    donePage: state.todoItem.donePage
})

const matDispatchToProps = dispatch => ({
    pageUp: () => {dispatch(doneItemPageUp())},
    pageDown: () => {dispatch(doneItemPageDown())}
})

export default connect(matStateToProps, matDispatchToProps)(DoneContainer);