import React from 'react';
import './appTitle.styles.scss'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';
import InfoIcon from '@material-ui/icons/Info';

const Apptitle = ({achievedBlocks}) =>{
    return(
        <div className="app-title-container">
            <img className="app-title" src="/assets/logo.png" alt="logo" />
            <div className="acheivement-icon" onClick={()=> document.getElementById('acheivements').classList.toggle("visible")} >
                <StarBorderIcon/> 
                <span> 
                   {`(${achievedBlocks})`} 
                </span>
            </div>
            <InfoIcon className="info" onClick={()=>{
                const infoContainer = document.getElementById('info-container');
                infoContainer.classList.toggle("hidden")
            }} />
            
        </div>
        
    )
}

const mapStateToProps= state =>({
    achievedBlocks: state.todoItem.achievedBlocks
})

export default connect(mapStateToProps)(Apptitle)
