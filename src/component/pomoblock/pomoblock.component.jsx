import React from 'react';
import  './pomoblock.styles.scss';


const Pomoblock = ({finished}) =>{
    console.log(finished)

    return(
        <div className={`pomoblock ${finished ? `finished` : null}`}>
            

        </div>
    )


}

export default Pomoblock;