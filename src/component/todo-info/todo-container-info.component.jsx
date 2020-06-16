import React from 'react';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra'
import Pomoblock from '../pomoblock/pomoblock.component';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './todo-container-info.styles.scss';


export const TodoContainerInfo = () => {
    return (
        <ul className ="todo-info">
            <li>
                <p className="description"><PlayArrowRoundedIcon color="secondary" /> &nbsp; Start the timer  </p>
            </li>
            <li>
                <p className="description"><DirectionsRunIcon color="secondary" /> &nbsp; Click to pause  </p>
            </li>
            <li>
                <p className="description"><AirlineSeatReclineExtraIcon color="secondary" />&nbsp;  Rest time</p>
            </li>
            <li>
                <p className="description pomo-info"><Pomoblock />&nbsp;  Progress Bar </p>
            </li>

            <li>
                <p className="description"><ButtonGroup color="secondary" className="button-description"><Button>+</Button></ButtonGroup>&nbsp; Add timer</p>
            </li>
            <li>
                <p className="description"><ButtonGroup color="secondary" className="button-description"><Button>-</Button></ButtonGroup>&nbsp; Remove timer</p>
            </li>
            <li className= "full">
                <p className="description"><Button color="secondary" className="button-description done-button-info">Done</Button> Move to Dead Enemies </p>
            </li>

        </ul>
    )
}