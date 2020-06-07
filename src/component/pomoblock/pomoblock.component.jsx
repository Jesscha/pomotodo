import React from 'react';
import  './pomoblock.styles.scss';


const Pomoblock = ({finished}) =>{
    return(
        <div className={`pomoblock ${finished ? `finished` : null}`}>
            

        </div>
    )


}

export default Pomoblock;