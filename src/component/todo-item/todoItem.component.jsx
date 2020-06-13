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
        this.handleMoveItemThrottle = throttle(this.props.moveItem, 100000);
        this.hadleMoveBackThrottle = throttle(this.props.moveBack, 100000);
        this.counterRef = React.createRef();
    }

    fireTimerAction = () => {
        let timeLeft = workTime
        const count = this.counterRef.current;
        const unfinishedBlock = count.querySelector(".unfinished");
        if (unfinishedBlock) {
            if (this.state.itemState === "ready") {
                const handler = setInterval(() => {
                    timeLeft--;
                    if (timeLeft <= 0) {
                        // web notification 코드, 모듈로 빼자.. 
                      
                        // console.log(Notification)
                        notificationCall( "/assets/logo.png", "Well done! Take a break!!",showNotification)


                        clearInterval(handler)
                        this.changeButton();
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
                this.progressAnimation();
            }
            // 상황에 맞춰서 버튼 변화
            this.changeButton();


        } else {
            alert("please move this to Dead Enemies or add another block for this task!")
        }



    }

    progressAnimation() {
        const count = this.counterRef.current;
        const unfinishedBlock = count.querySelector(".unfinished");

        if (unfinishedBlock) {
            let interval = 1
            let updatesPerSecond = 1000  //ms
            let end = unfinishedBlock.max + 1
            let self = this
            const animator = () => {
                unfinishedBlock.value = unfinishedBlock.value + interval
                if (unfinishedBlock.value + interval < end) {
                    setTimeout(animator, updatesPerSecond);
                } else {
                    unfinishedBlock.value = 0
                    self.props.fireTimer(self.props.item)
                }
            }
            setTimeout(() => {
                animator()
            }, 1000
            )
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
                            /> : this.state.itemState === "working" ? <DirectionsRunIcon className="button-working" color="primary" /> : <AirlineSeatReclineExtraIcon className="button-resting" color="primary" />)
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


