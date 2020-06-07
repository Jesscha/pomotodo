import React from 'react';

import './blockAcheivedContainer.styles.scss'
import Pomoblock from '../pomoblock/pomoblock.component';
import { connect } from 'react-redux';

export const BlockAcheivedContainer = ({achievedBlocks}) =>{

    return (
        <div className="block-acheived-container">
            {[...Array(achievedBlocks)].map((n, index) => (
                        <Pomoblock key={index} finished={true} />
                    ))}
            

        </div>
    )
}

const mapStateToProps = state =>({
    achievedBlocks : state.todoItem.achievedBlocks
})

export default  connect(mapStateToProps)(BlockAcheivedContainer);


