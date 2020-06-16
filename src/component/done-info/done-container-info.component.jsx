import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Checkbox } from '@material-ui/core';
import './done-container-info.styles.scss'


export const DoneContainerInfo = () => {
    return (
            <ul className="done-info">
                <li>
                    <p className="description">- Click <Checkbox color="secondary" checked={true} /> to revive the task.</p>
                </li>
                <li>
                    <p className="description">- <ButtonGroup color="secondary" className="button-description"><Button>X</Button></ButtonGroup> deletes the task from memory. It can't be reverted.</p>
                </li>
            </ul>
    )
}