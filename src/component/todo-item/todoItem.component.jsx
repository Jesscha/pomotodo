import React from 'react';

const TodoItem = ({name, pomoCount}) => {
    return(
        <li className="todo-item">
            <span className="name">
                {name}
            </span>
            <span className="pomocount">
                {pomoCount}
            </span>
        </li>
    )
}

export default TodoItem;
