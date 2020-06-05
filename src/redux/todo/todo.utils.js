

export const moveTodoItem = (todoItems, ItemToMove)=>{
    const arr =  todoItems.filter(item => item.id !== ItemToMove.id);
    return arr
}

