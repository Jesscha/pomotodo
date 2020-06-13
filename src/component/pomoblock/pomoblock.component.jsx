import React from 'react';
import  './pomoblock.styles.scss';
import { workTime } from '../../assets/todo.variables';


const Pomoblock = ({finished}) =>{
    return(
        <>
        {finished ? 
        <span className={`pomoblock finished`} ></span>:
        <progress className={`pomoblock unfinished`} value="0" max={workTime} />}
        </>
    )


}

export default Pomoblock;