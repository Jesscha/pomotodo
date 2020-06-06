import React from 'react';
import Pomoblock from '../pomoblock/pomoblock.component';
import { moveToDone, moveBackToList, deleteItemFromDone, deleteItemFromToDo, fireTimer } from '../../redux/todo/todo.action';
import { connect } from 'react-redux';

export const TodoItem = ({ item, moveItem, moveBack, isLive, deleteItemFromToDo, deleteItemFromDone, fireTimer }) => {
    const { name, livePomoBlocks, finishedPomoBlocks} = item

    const fireTimerAction = (item)=>{
        
        const handler = ()=>{setTimeout(()=>{
            fireTimer(item)
        }, 1000)}
        handler();
        // isrunninng 같은걸넣너 주면 좋지 않을까
        
    }

    return (
        <li className="todo-item">
            <button onClick={()=>{fireTimerAction(item)}}> ▶︎ </button>
            <span className="name">
                {name}
            </span>

            {isLive ? <button onClick={() => { moveItem(item) }}>Move To Done</button> : <button onClick={() => { moveBack(item) }}>Go Back</button>}
            <button onClick={() => {
                if (isLive) {
                    deleteItemFromToDo(item);
                } else {
                    deleteItemFromDone(item);
                }
            }}>X</button>
            <span className="pomocount">
                {[...Array(finishedPomoBlocks)].map((n, index) => (
                    <Pomoblock key={index} finished ={true} />
                ))}
                {[...Array(livePomoBlocks)].map((n, index) => (
                    <Pomoblock key={index} />
                ))}
            </span>
        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    moveItem: item => dispatch(moveToDone(item)),
    moveBack: item => dispatch(moveBackToList(item)),
    deleteItemFromToDo: item => dispatch(deleteItemFromToDo(item)),
    deleteItemFromDone: item => dispatch(deleteItemFromDone(item)),
    fireTimer: item => dispatch(fireTimer(item))
});



export default connect(null, mapDispatchToProps)(TodoItem);


