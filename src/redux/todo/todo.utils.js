export const removeFromList = (todoItems, itemToMove)=>{
    const arr =  todoItems.filter(item => item.id !== itemToMove.id);
    return arr
}

export const changeLiveAndFinishedPomoblocks = ((todoItems, itemToMove)=>{
    
    return todoItems.map(item => { 
        if (item.id === itemToMove.id){
            
            const newItem = {
                ...item,
                livePomoBlocks: item.livePomoBlocks-1 >= 0 ? item.livePomoBlocks-1 :item.livePomoBlocks , 
                finishedPomoBlocks: item.livePomoBlocks-1 >= 0 ? item.finishedPomoBlocks +1: item.finishedPomoBlocks
            }
            return newItem
        }else{
            return item
        }

    });
    

})