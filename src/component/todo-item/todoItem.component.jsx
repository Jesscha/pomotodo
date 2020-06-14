import React from 'react';
import Pomoblock from '../pomoblock/pomoblock.component';
import { moveToDone, moveBackToList, deleteItemFromDone, fireTimer, pomoblockIncrease, pomoblockDecrease } from '../../redux/todo/todo.action';
import { connect } from 'react-redux';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import './todoItem.styles.scss'
import { Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { throttle } from 'lodash'
import { workTime, restingTime } from '../../assets/todo.variables';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { showNotification, notificationCall } from './todoItem.utils';

export class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemState: "ready"
        };
        this.isPaused = false;
        this.timeLeft = workTime;
        this.handleMoveItemThrottle = throttle(this.props.moveItem, 100000);
        this.hadleMoveBackThrottle = throttle(this.props.moveBack, 100000);
        this.counterRef = React.createRef();
        this.workingIconRef = React.createRef();
    }

    fireTimerAction = () => {
        const count = this.counterRef.current;
        console.log(count)
        const unfinishedBlock = count.querySelector(".unfinished");
        console.log(unfinishedBlock)
        if (unfinishedBlock) {
            console.log(this.timeLeft);
            if (this.state.itemState === "ready" || (this.state.itemState === "working" && this.isPaused === true)) {
                this.handler = setInterval(() => {
                    // 프로그래스 바를 채운다. 
                    unfinishedBlock.value = unfinishedBlock.max - this.timeLeft+1;
                    this.timeLeft --;
                    if (this.timeLeft <= 0) {
                        // 완료된 블록 추가
                        this.timeLeft = workTime;
                        this.props.fireTimer(this.props.item)
                        // 웹 알림 기능
                        notificationCall( "/assets/logo.png", "Well done! Take a break!!",showNotification)
                        clearInterval(this.handler);
                        this.changeButton();
                        // 프로그래스 바 초기화
                        unfinishedBlock.value = 0 
                        let restTime = restingTime;
                        const restHandler = setInterval(() => {
                            restTime--
                            if (restTime <= 0) {
                                notificationCall( "/assets/logo.png", "Fight again!!",showNotification)
                                clearInterval(restHandler);
                                this.changeButton();
                            }
                        }, 1000)
                    }
                }, 1000);
            }
            // 상황에 맞춰서 버튼 변화
            if( !(this.state.itemState === "working" && this.isPaused === true)){
                this.changeButton();
            }
            
        } else {
            alert("please move this to Dead Enemies or add another block for this task!")
        }
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

    pauseAndreStart = () => {

        // 아이콘 색을 상태에 따라 바꾸기 위해 ref를 지정 
        const workingIcon= this.workingIconRef.current;
        console.log(workingIcon) 

        if (this.isPaused){
            this.fireTimerAction(this.props.item);
            this.isPaused = false;
            workingIcon.classList.toggle('paused');
            
        }else{
            clearInterval(this.handler);
            this.isPaused = true;
            console.log(this);
            workingIcon.classList.toggle('paused');
        }
    }

    render() {
        const { item, isLive, deleteItemFromDone, addPomoBlocks, removePomoBlocks } = this.props
        const { name, livePomoBlocks, finishedPomoBlocks } = item
        return (
            <li className="todo-item">

                {isLive ? null : <Checkbox defaultChecked={true} onClick={() => {
                    setTimeout(() => {
                        this.hadleMoveBackThrottle(item)
                    }, 450)
                }} color="primary" />}
                {isLive ?
                    (
                        this.state.itemState === "ready" ?
                            <PlayArrowRoundedIcon
                                className="button-play"
                                color="primary" onClick={() => { this.fireTimerAction(item) }}
                            /> : this.state.itemState === "working" ? <DirectionsRunIcon ref={this.workingIconRef} className="button-working" color="primary" onClick={() =>{this.pauseAndreStart()}}/> : <AirlineSeatReclineExtraIcon className="button-resting" color="primary" />)
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
                            <Button onClick={() => {
                                setTimeout(() => {
                                    this.handleMoveItemThrottle(item)
                                }, 400)
                            }} color="primary" className="explode-wrapper" >
                                <BlurOnIcon className='explode' color="primary" />
                            </Button>
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


