import React from 'react';
import Pomoblock from '../pomoblock/pomoblock.component';
import { moveToDone, moveBackToList, deleteItemFromDone, deleteItemFromToDo, fireTimer } from '../../redux/todo/todo.action';
import { connect } from 'react-redux';

export const TodoItem = ({ item, moveItem, moveBack, isLive, deleteItemFromToDo, deleteItemFromDone, fireTimer }) => {
    const { name, livePomoBlocks, finishedPomoBlocks} = item

    const fireTimerAction = (item)=>{
        // time을 먼저 선언하고 setInterval로 낮춘다. 
        // 5분 휴식중 이라는 것을 알게 하는 ui 필요함 
        let timeLeft = 1 // 원래는 25분을 초로 환산한 시간.
        const handler = setInterval(()=>{
            timeLeft --
            if (timeLeft < 0 ){
                fireTimer(item)
                clearInterval(handler)
                let restTimeLeft = 1;
                const restHandler = setInterval(()=>{
                    restTimeLeft --
                    if (restTimeLeft <0){
                        clearInterval(restHandler)
                        alert("Start Work Again!")
                    }
                }, 5000)
                alert(`Well done! Take a break for 5 minutes~`)
                
            }
        }, 1000);
    }

    return (
        <li className="todo-item">
            {/* 상태에 따라 기호를 바꾸고 수행하는 액션을 다르게 만들어 보자  */}
            {isLive ? (<button onClick={()=>{fireTimerAction(item)}}> ▶︎ </button>):null}
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
            {isLive ? (<span className="pomocount">
                {[...Array(finishedPomoBlocks)].map((n, index) => (
                    <Pomoblock key={index} finished ={true} />
                ))}
                {[...Array(livePomoBlocks)].map((n, index) => (
                    <Pomoblock key={index} />
                ))}
            </span>) : null}
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


