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
                <p className="description">- Click <PlayArrowRoundedIcon color="secondary" /> to start Pomodoro Timer.  </p>
            </li>
            <li>
                <p className="description">- <DirectionsRunIcon color="secondary" /> means you are working on the task.  </p>
            </li>
            <li>
                <p className="description">- Click <DirectionsRunIcon color="secondary" /> to pause the timer.</p>
            </li>
            <li>
                <p className="description">- <AirlineSeatReclineExtraIcon color="secondary" /> means it's break time. Take 5 minutes of break.    </p>
            </li>
            <li>
                <p className="description">- <Pomoblock /> means one Pomodore Timer(25-min). </p>
            </li>

            <li>
                <p className="description">- <ButtonGroup color="secondary" className="button-description"><Button>+</Button><Button>-</Button></ButtonGroup> adjusts another Pomodore Blocks on specific task.</p>
            </li>
            <li>
                <p className="description">- <Button color="secondary" className="button-description">Done</Button>moves specific task to Dead Enemies. </p>
            </li>

        </ul>
    )
}