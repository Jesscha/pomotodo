import React from 'react';
import { Paper } from '@material-ui/core';
import './info-container.styles.scss'


export const InfoContainer = () =>{
    return (

        <div className="info-container hidden" id="info-container">
            <Paper className="info-text-wrapper">
                <h1>Thnak Your for Playing😍</h1>
                <p>
                    If you had heared about Pomodore timer and used it, <strong>"POMO CRUSHER" </strong>will enhance your productivity! 🎉 🎉
                    <br/><br/>
                    Please read the instruction. It will help you to fully utilze the funtionality.
                </p>
                <ul>
                    <li>

                    </li>
                </ul>



            </Paper>
        </div>
    )
}