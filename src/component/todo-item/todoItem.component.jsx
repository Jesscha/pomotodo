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
import { throttle } from 'lodash'
import { workTime, restingTime } from '../../assets/todo.variables';
export class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemState: "ready"
        };
        this.handleMoveItemThrottle = throttle(this.props.moveItem, 100000);
        this.hadleMoveBackThrottle = throttle(this.props.moveBack, 100000);
        this.counterRef = React.createRef();
    }

    fireTimerAction = (item) => {
        let timeLeft = workTime 
        if (this.state.itemState === "ready") {
            const handler = setInterval(() => {
                console.log(timeLeft)
                timeLeft--;
                if (timeLeft <= 0) {
                    
                    clearInterval(handler)
                    this.changeButton();
                    let restTime = restingTime;
                    const restHandler = setInterval(() => {
                        restTime--
                        if (restTime <= 0) {
                            clearInterval(restHandler);
                            this.changeButton();
                        }
                    }, 1000)
                }
            }, 1000);
            this.progressAnimation();
        }
        // 상황에 맞춰서 버튼 변화
        this.changeButton();
    }

    progressAnimation() {
        const count = this.counterRef.current;
        const unfinishedBlock = count.querySelector(".unfinished");
        
        
        let interval = 1
        let updatesPerSecond = 1000  //ms
        let end = unfinishedBlock.max +1
        let self = this
        const animator = () => {
            unfinishedBlock.value = unfinishedBlock.value + interval
            if (unfinishedBlock.value + interval < end) {
                console.log(unfinishedBlock.value)
                setTimeout(animator, updatesPerSecond);
            } else {
                unfinishedBlock.value = 0
                self.props.fireTimer(self.props.item)
            }
        }

       setTimeout(()=>{
        animator()
       },1000
       )
       
       
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
        const { item, isLive, deleteItemFromDone, addPomoBlocks, removePomoBlocks } = this.props
        const { name, livePomoBlocks, finishedPomoBlocks } = item
        return (
            <li className="todo-item">
                {isLive ? <Checkbox onClick={() => {
                    setTimeout(() => {
                        this.handleMoveItemThrottle(item)
                    }, 700)
                }} color="primary" /> : <Checkbox defaultChecked={true} onClick={() => {
                    setTimeout(() => {
                        this.hadleMoveBackThrottle(item)
                    }, 700)
                }} color="primary" />}
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
                        <span ref={this.counterRef} className="pomocount">
                            {[...Array(finishedPomoBlocks)].map((n, index) => (
                                <Pomoblock key={index} finished={true} />
                            ))} 
                            {[...Array(livePomoBlocks)].map((n, index) => (
                                <Pomoblock key={index} />
                            ))}
                        </span>
                        <ButtonGroup className="buttons-plusminus" color="primary" aria-label="outlined primary button group">
                            <Button className="control-button" onClick={() => { addPomoBlocks(item) }}>+</Button>
                            <Button className="control-button" onClick={() => { removePomoBlocks(item) }}>-</Button>
                        </ButtonGroup>
                    </>
                ) :
                    <ButtonGroup className="buttons-delete " color="primary" aria-label="outlined primary button group">
                        <Button className="control-button" onClick={() => {
                            deleteItemFromDone(item);
                        }}>X</Button>
                    </ButtonGroup>
                }
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


