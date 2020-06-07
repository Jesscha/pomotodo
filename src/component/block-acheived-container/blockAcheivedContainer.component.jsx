import React from 'react';

import './blockAcheivedContainer.styles.scss'
import Pomoblock from '../pomoblock/pomoblock.component';
import { connect } from 'react-redux';
import { clearAcheivedBlocks } from '../../redux/todo/todo.action';

export const BlockAcheivedContainer = ({achievedBlocks, clearBlocks}) =>{

    return (
        <div className="block-acheived-container">
            <h1>Acheivements</h1>
            {[...Array(achievedBlocks)].map((n, index) => (
                        <Pomoblock key={index} finished={true} />
                    ))}

            <button onClick={()=>{clearBlocks()}}>Clear Out</button>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    clearBlocks : ()=> dispatch(clearAcheivedBlocks())
})

const mapStateToProps = state =>({
    achievedBlocks : state.todoItem.achievedBlocks
})

export default  connect(mapStateToProps, mapDispatchToProps)(BlockAcheivedContainer);


