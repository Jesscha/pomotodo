import React from 'react';
import Pomoblock from '../pomoblock/pomoblock.component';
import { moveToDone } from '../../redux/todo/todo.action';
import { connect } from 'react-redux';

export const TodoItem = ({item, moveItem}) => {
    const {name, pomoCount} = item
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
            <button onClick={()=>{moveItem(item)}}>Move To Done</button>
        </li>
    )
}

const mapDispatchToProps = dispatch =>({
    moveItem: item => dispatch(moveToDone(item))
});



export default connect(null, mapDispatchToProps)(TodoItem);


