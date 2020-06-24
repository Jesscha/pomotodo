import React from 'react';
import { Paper } from '@material-ui/core';
import './info-container.styles.scss'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra'
import Pomoblock from '../pomoblock/pomoblock.component';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Checkbox } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';


export const InfoContainer = () => {
    return (

        <div className="info-container hidden" id="info-container">
            <Paper className="info-text-wrapper">
                {/* eslint-disable-next-line */}
                <h1>Thnak Your for Trying this😍</h1>
                <p>
                    If you've used <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="blank" >Pomodore Technique</a>, This <strong>"POMO CRUSHER" </strong>will help you to fully enjoy that! 🎉 🎉
                    <br /><br />
                    {/* eslint-disable-next-line */}
                    Still not sure how to use it? Please read the instruction below. 😉
                    <a href="https://www.notion.so/Pomocrusher-1-0-986ed7e3a86a40b78eea024c946896bf" target="blank"> (한국어 페이지 방문하기)</a>
                    <br /><br />
                    Also, it will be super beneficial to "POMO CRUSHER" if you give some  <a href="https://forms.gle/mu3Sfh8AACRdwePb6" target="blank">feedback</a>.
                </p>
                <h2>Instruction</h2>
                {/* eslint-disable-next-line */}
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
                {/* eslint-disable-next-line */}
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
                        <p className="description">- <Button className="button-description" color="primary">DONE</Button> moves specific task to Dead Enemies. </p>
                    </li>
                </ul>
                {/* eslint-disable-next-line */}
                <h2> 💀 Dead Enemies </h2>
                <ul>
                    <li>
                        <p className="description">- This is the place where acheived tasks rest in peace.</p>
                    </li>
                    <li>
                        <p className="description">- <Checkbox color="primary" checked={true} /> revives the task.</p>
                    </li>
                    <li>
                        <p className="description " >- <Button color="primary" className="button-description del-icon-info">X</Button> deletes the task from memory. It can't be reverted.</p>
                    </li>
                </ul>
                {/* eslint-disable-next-line */}
                <h2> 🐱 Miscellaneous</h2>
                <ul>
                    <li>
                        <p className="description">- <StarBorderIcon className="acheivement-button-info" style={{ fill: "rgb(193, 193, 40)" }} /> shows acheieved blocks and level will show up.</p>
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