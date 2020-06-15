import React from 'react';
import { Paper } from '@material-ui/core';
import './info-container.styles.scss'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra'
import Pomoblock from '../pomoblock/pomoblock.component';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { Checkbox } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';


export const InfoContainer = () => {
    return (

        <div className="info-container hidden" id="info-container">
            <Paper className="info-text-wrapper">
                <h1>Thnak Your for Trying this😍</h1>
                <p>
                    If you hvave used <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="blank" >Pomodore Technique</a>, This <strong>"POMO CRUSHER" </strong>will help you to fully enjoy that! 🎉 🎉
                    <br /><br />
                    Still not sure how to use it? Please read the instruction below 😉
                </p>
                <h2>Instruction</h2>
                <h3> ✍🏼Defin Your Enemy</h3>
                <ul>
                    <li>
                        <p className="description">- This is the place where you set your job to be done.</p>
                    </li>
                    <li>
                        <p className="description">- On "I need to do..." field, you can put the name of the task.  </p>
                    </li>
                    <li>
                        <p className="description">- On "# of 25-mins" field, you can set the number of Pomodoro timer you want.</p>
                    </li>
                </ul>

                <h2>🔥 Crush Them</h2>
                <ul>
                    <li>
                        <p className="description">- This is the place where you crush your enemies.</p>
                    </li>
                    <li>
                        <p className="description">- Click <PlayArrowRoundedIcon color="primary" /> button to start Pomodoro Timer.  </p>
                    </li>
                    <li>
                        <p className="description">- <DirectionsRunIcon color="primary" /> means you are working on the task.  </p>
                    </li>
                    <li>
                        <p className="description">- Click <DirectionsRunIcon color="primary" /> to pause the timer.</p>
                    </li>
                    <li>
                        <p className="description">- <AirlineSeatReclineExtraIcon color="primary" /> means it's break time. Take 5 minutes of break.    </p>
                    </li>
                    <li>
                        <p className="description inline">- Each  <Pomoblock /> means 25-min of Pomodore Timer. It turns to  <Pomoblock finished={true} /> once it hits 25-min. </p>
                    </li>

                    <li>
                        <p className="description">- <ButtonGroup color="primary" className="button-description"><Button>+</Button></ButtonGroup> adds another Pomodore Blocks on specific task.</p>
                    </li>
                    <li>
                        <p className="description">- <ButtonGroup color="primary" className="button-description"><Button>-</Button></ButtonGroup> subtracts another Pomodore Blocks on specific task.</p>
                    </li>
                    <li>
                        <p className="description">- <ButtonGroup color="primary" className="button-description"><Button><BlurOnIcon /></Button></ButtonGroup> moves specific task to Dead Enemies. </p>
                    </li>
                </ul>
                <h2> 💀 Dead Enemies </h2>
                <ul>
                    <li>
                        <p className="description">- This is the place where acheived tasks rest in peace.</p>
                    </li>
                    <li>
                        <p className="description">- Once you uncheck <Checkbox color="primary" defaultChecked={true} /> , the task go back to the list above.</p>
                    </li>
                    <li>
                        <p className="description">- <ButtonGroup color="primary" className="button-description"><Button>X</Button></ButtonGroup> deletes the task from memory. It can't be reverted.</p>
                    </li>
                </ul>
                <h2> 🐱 Miscellaneous</h2>
                <ul>
                    <li>
                        <p className="description">- When <StarBorderIcon style={{ fill: "rgb(193, 193, 40)" }} /> clicked, acheieved blocks and level will show up.</p>
                    </li>
                    {/* <li>
                        <p className="description">- If you want to support the developer, please check this.</p>
                    </li> */}
                    
                </ul>

                <span
                    className="close-icon"
                    onClick={() => {
                        const infoContainer = document.getElementById('info-container');
                        infoContainer.classList.toggle("hidden")
                    }}
                >X</span>





            </Paper>
        </div>
    )
}