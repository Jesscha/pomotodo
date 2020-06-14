import React from 'react';
import  './pomoblock.styles.scss';


const Pomoblock = ({finished}) =>{
    return(
        <>
        {finished ? 
        <span className={`pomoblock finished`} ></span>:
        <progress className={`pomoblock unfinished`} value="0" max="100" />}
        </>
    )
}

export default Pomoblock;