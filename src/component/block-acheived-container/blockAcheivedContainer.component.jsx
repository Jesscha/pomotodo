import React from 'react';

import './blockAcheivedContainer.styles.scss'
// import Pomoblock from '../pomoblock/pomoblock.component';
import { connect } from 'react-redux';
import { clearAcheivedBlocks } from '../../redux/todo/todo.action';
import { Paper } from '@material-ui/core';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const BlockAcheivedContainer = ({ achievedBlocks, clearBlocks }) => {
    return (
        <div className="block-acheived-container container" id="acheivements">
            <Paper >
                <h4 className="acheived-title" >Status</h4>
                <span
                    className="close-icon"
                    onClick={() => {
                        document.getElementById('acheivements').classList.remove("visible");
                    }}
                >X</span>
                <ul className="status-lists">
                    <li className="status-item">
                        {`Level : ${Math.floor(achievedBlocks / 10) + 1}`}
                    </li>
                    <li className="status-item">
                        {`crushed blocks : ${achievedBlocks}`}
                    </li>
                </ul>

                {/* <DeleteForeverIcon className="deleteIcon" color="primary" onClick={() => { clearBlocks() }} /> */}
            </Paper>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearBlocks: () => dispatch(clearAcheivedBlocks())
})

const mapStateToProps = state => ({
    achievedBlocks: state.todoItem.achievedBlocks
})

export default connect(mapStateToProps, mapDispatchToProps)(BlockAcheivedContainer);


