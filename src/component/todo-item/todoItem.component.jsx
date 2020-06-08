import React from 'react';
import Pomoblock from '../pomoblock/pomoblock.component';
import { moveToDone, moveBackToList, deleteItemFromDone, deleteItemFromToDo, fireTimer, pomoblockIncrease, pomoblockDecrease } from '../../redux/todo/todo.action';
import { connect } from 'react-redux';

import './todoItem.styles.scss'
import { Checkbox } from '@material-ui/core';

export class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemState: "ready"
        }
    }

    fireTimerAction = (item) => {
        // todo: 5분 휴식중 이라는 것을 알게 하는 ui 필요함 
       
        let timeLeft = 1 // 원래는 25분을 초로 환산한 시간.
        if (this.state.itemState === "ready"){
        const handler = setInterval(() => {
            timeLeft--
            if (timeLeft < 0) {
                this.props.fireTimer(item)
                clearInterval(handler)
                this.changeButton();
                let restTime = 1
                const restHandler = setInterval(()=>{
                    restTime --
                    if (restTime < 0){
                        clearInterval(restHandler);
                        this.changeButton();
                    }
                }, 1000)
            }
        }, 1000);}
        // 상황에 맞춰서 버튼 변화
        this.changeButton();
    }

    changeButton = () => {
        if (this.state.itemState === "ready") {
            this.setState({ itemState: "working" })
        } else if (this.state.itemState === "working") {
            this.setState({ itemState: "resting" })
        } else if (this.state.itemState === "resting") {
            this.setState({ itemState: "ready" })
        }
    }

    render() {
        const { item, moveItem, moveBack, isLive, deleteItemFromToDo, deleteItemFromDone, addPomoBlocks, removePomoBlocks } = this.props
        const { name, livePomoBlocks, finishedPomoBlocks } = item
        return (
            <li className="todo-item">
                {isLive ? <Checkbox onClick={() => {setTimeout(()=>{moveItem(item)
                }, 700)}} color="primary"/>: <button onClick={() => { moveBack(item) }}>Go Back</button>}
                {isLive ?
                    (<button onClick={() => { this.fireTimerAction(item) }}
                    className = {this.state.itemState === "ready" ? "ready" : (this.state.itemState === "working" ? "working" : "resting") }
                    disabled= {this.state.itemState !== "ready" ?  true: false}
                    >
                       
                    </button>)
                    : null}
                <span className="name">
                    {name}
                </span>
                
                <button onClick={() => {
                    if (isLive) {
                        deleteItemFromToDo(item);
                    } else {
                        deleteItemFromDone(item);
                    }
                }}>X</button>
                {isLive ? (<span className="pomocount">
                    {[...Array(finishedPomoBlocks)].map((n, index) => (
                        <Pomoblock key={index} finished={true} />
                    ))}
                    {[...Array(livePomoBlocks)].map((n, index) => (
                        <Pomoblock key={index} />
                    ))}
                <button onClick={()=>{addPomoBlocks(item)}}>+</button>
                <button onClick={()=>{removePomoBlocks(item)}}>-</button>
                </span>
                ) : null}
            </li>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    moveItem: item => dispatch(moveToDone(item)),
    moveBack: item => dispatch(moveBackToList(item)),
    deleteItemFromToDo: item => dispatch(deleteItemFromToDo(item)),
    deleteItemFromDone: item => dispatch(deleteItemFromDone(item)),
    fireTimer: item => dispatch(fireTimer(item)),
    addPomoBlocks: item => dispatch(pomoblockIncrease(item)),
    removePomoBlocks: item => dispatch(pomoblockDecrease(item))
});



export default connect(null, mapDispatchToProps)(TodoItem);


