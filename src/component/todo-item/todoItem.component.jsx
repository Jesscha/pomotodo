import React from 'react';
import Pomoblock from '../pomoblock/pomoblock.component';

const TodoItem = ({name, pomoCount}) => {
    console.log(name)
    

    return(
        <li className="todo-item">
            <span className="name">
                {name}
            </span>
            <span className="pomocount">
                {[...Array(pomoCount)].map((n,index)=>(
                    <Pomoblock key={index} />
                ))}
            </span>
            
        </li>
    )
}

export default TodoItem;
