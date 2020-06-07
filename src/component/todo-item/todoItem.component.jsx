import React from 'react';
import Pomoblock from '../pomoblock/pomoblock.component';
import { moveToDone, moveBackToList, deleteItemFromDone, deleteItemFromToDo, fireTimer } from '../../redux/todo/todo.action';
import { connect } from 'react-redux';

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
        const { item, moveItem, moveBack, isLive, deleteItemFromToDo, deleteItemFromDone } = this.props
        const { name, livePomoBlocks, finishedPomoBlocks } = item
        return (
            <li className="todo-item">

                {isLive ?
                    (<button onClick={() => { this.fireTimerAction(item) }}>
                        {this.state.itemState === "ready" ? "▶️" : (this.state.itemState === "working" ? "🕐" : "🤘")
                        }
                    </button>)
                    : null}
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
                        <Pomoblock key={index} finished={true} />
                    ))}
                    {[...Array(livePomoBlocks)].map((n, index) => (
                        <Pomoblock key={index} />
                    ))}
                </span>) : null}
            </li>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    moveItem: item => dispatch(moveToDone(item)),
    moveBack: item => dispatch(moveBackToList(item)),
    deleteItemFromToDo: item => dispatch(deleteItemFromToDo(item)),
    deleteItemFromDone: item => dispatch(deleteItemFromDone(item)),
    fireTimer: item => dispatch(fireTimer(item))
});



export default connect(null, mapDispatchToProps)(TodoItem);


