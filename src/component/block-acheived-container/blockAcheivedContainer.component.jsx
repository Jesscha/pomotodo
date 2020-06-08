import React from 'react';

import './blockAcheivedContainer.styles.scss'
import Pomoblock from '../pomoblock/pomoblock.component';
import { connect } from 'react-redux';
import { clearAcheivedBlocks } from '../../redux/todo/todo.action';
import { Paper } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const BlockAcheivedContainer = ({ achievedBlocks, clearBlocks }) => {

    return (
        <Paper className="container block-acheived-container">
            <h3 className="acheived-title" >Acheivements <span>{`(${achievedBlocks})`}</span></h3>
            <span className="acheived-blocks">
                {[...Array(achievedBlocks)].map((n, index) => (
                    <Pomoblock key={index} finished={true} />
                ))}
            </span>

            <DeleteForeverIcon className="deleteIcon" color="primary" onClick={() => { clearBlocks() }} />
        </Paper>
    )
}

const mapDispatchToProps = dispatch => ({
    clearBlocks: () => dispatch(clearAcheivedBlocks())
})

const mapStateToProps = state => ({
    achievedBlocks: state.todoItem.achievedBlocks
})

export default connect(mapStateToProps, mapDispatchToProps)(BlockAcheivedContainer);


