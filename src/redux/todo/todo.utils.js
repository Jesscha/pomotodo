

export const removeFromList = (todoItems, itemToMove)=>{
    console.log(todoItems)
    const arr =  todoItems.filter(item => item.id !== itemToMove.id);
    return arr
}

