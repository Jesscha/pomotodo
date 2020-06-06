import React from 'react';
import Pomoblock from '../pomoblock/pomoblock.component';
import { moveToDone, moveBackToList, deleteItemFromDone, deleteItemFromToDo } from '../../redux/todo/todo.action';
import { connect } from 'react-redux';

export const TodoItem = ({item, moveItem, moveBack, isLive, deleteItemFromToDo, deleteItemFromDone}) => {
    const {name, pomoCount} = item
    return(
        <li className="todo-item">
            <span className="name">
                {name}
            </span>
            <span className="pomocount">
                {[...Array(parseInt(pomoCount))].map((n,index)=>(
                    <Pomoblock key={index} />
                ))}
            </span>
            {isLive? <button onClick={()=>{moveItem(item)}}>Move To Done</button> : <button onClick={()=>{moveBack(item)}}>Go Back</button> }
            <button onClick={()=>{
                if (isLive){
                    deleteItemFromToDo(item);
                }else{
                    deleteItemFromDone(item);
                }
               }}>X</button>
        </li>
    )
}

const mapDispatchToProps = dispatch =>({
    moveItem: item => dispatch(moveToDone(item)),
    moveBack: item => dispatch(moveBackToList(item)),
    deleteItemFromToDo: item => dispatch(deleteItemFromToDo(item)),
    deleteItemFromDone: item => dispatch(deleteItemFromDone(item))
});



export default connect(null, mapDispatchToProps)(TodoItem);


