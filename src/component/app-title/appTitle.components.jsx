import React from 'react';
import './appTitle.styles.scss'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';

const Apptitle = ({achievedBlocks}) =>{
    return(
        <div className="app-title-container">
            <img className="app-title" src="/assets/logo.png" alt="logo" />
            <div className="acheivement-icon" onClick={()=> document.getElementById('acheivements').classList.add("visible")} >
                <StarBorderIcon/> 
                <span> 
                   {`(${achievedBlocks})`} 
                </span>
            </div>
        </div>
        
    )
}

const mapStateToProps= state =>({
    achievedBlocks: state.todoItem.achievedBlocks
})

export default connect(mapStateToProps)(Apptitle)
