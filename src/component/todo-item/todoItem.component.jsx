import React from 'react';
import Pomoblock from '../pomoblock/pomoblock.component';
import { moveToDone, moveBackToList, deleteItemFromDone, fireTimer, pomoblockIncrease, pomoblockDecrease } from '../../redux/todo/todo.action';
import { connect } from 'react-redux';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded';
import LocalHotelRoundedIcon from '@material-ui/icons/LocalHotelRounded';
import './todoItem.styles.scss'
import { Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
        if (this.state.itemState === "ready") {
            const handler = setInterval(() => {
                timeLeft--
                if (timeLeft < 0) {
                    this.props.fireTimer(item)
                    clearInterval(handler)
                    this.changeButton();
                    let restTime = 1
                    const restHandler = setInterval(() => {
                        restTime--
                        if (restTime < 0) {
                            clearInterval(restHandler);
                            this.changeButton();
                        }
                    }, 1000)
                }
            }, 1000);
        }
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
        const { item, moveItem, moveBack, isLive, deleteItemFromDone, addPomoBlocks, removePomoBlocks } = this.props
        const { name, livePomoBlocks, finishedPomoBlocks } = item
        return (
            <li className="todo-item">
                {isLive ? <Checkbox onClick={() => {
                    setTimeout(() => {
                        moveItem(item)
                    }, 700)
                }} color="primary" /> : <button onClick={() => { moveBack(item) }}>Go Back</button>}
                {isLive ?
                    (
                        this.state.itemState === "ready" ?
                            <PlayArrowRoundedIcon
                                className="button-play"
                                color="primary" onClick={() => { this.fireTimerAction(item) }}
                            /> : this.state.itemState === "working" ? <RotateLeftRoundedIcon className="button-working" color="primary" /> : <LocalHotelRoundedIcon className="button-resting" color="primary" />)
                    : null}
                <span className="todo-name">
                    {name}
                </span>

                {isLive ? (
                    <>
                        <span className="pomocount">
                            {[...Array(finishedPomoBlocks)].map((n, index) => (
                                <Pomoblock key={index} finished={true} />
                            ))}
                            {[...Array(livePomoBlocks)].map((n, index) => (
                                <Pomoblock key={index} />
                            ))}
                        </span>
                        <ButtonGroup className="buttons-plusminus" color="primary" aria-label="outlined primary button group">
                            <Button  onClick={() => { addPomoBlocks(item) }}>+</Button>
                            <Button  onClick={() => { removePomoBlocks(item) }}>-</Button>
                        </ButtonGroup>
                    </>
                ) : <button onClick={() => {
                    deleteItemFromDone(item);
                }}>X</button>}
            </li>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    moveItem: item => dispatch(moveToDone(item)),
    moveBack: item => dispatch(moveBackToList(item)),

    deleteItemFromDone: item => dispatch(deleteItemFromDone(item)),
    fireTimer: item => dispatch(fireTimer(item)),
    addPomoBlocks: item => dispatch(pomoblockIncrease(item)),
    removePomoBlocks: item => dispatch(pomoblockDecrease(item))
});



export default connect(null, mapDispatchToProps)(TodoItem);


