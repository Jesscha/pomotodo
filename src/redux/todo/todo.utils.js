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



export const increasePomoBlocks=(todoItems, itemToModify) =>{
    const arr =  todoItems.map(item => { 
        if (item.id === itemToModify.id){
            const newItem = {
                ...item,
                pomoCount: item.pomoCount +1,
                livePomoBlocks: item.livePomoBlocks+1, 
            }
            console.log(newItem)
            return newItem
        }else{
            return item
        }
    })
    console.log(arr)
    return arr 
}


export const decreasePomoBlocks= (todoItems, itemToModify) =>{
    const arr  =  todoItems.map(item => { 
        if (item.id === itemToModify.id){
            const newItem = {
                ...item,
                pomoCount:  item.pomoCount -1 > 0 ?  item.pomoCount -1 : item.pomoCount,
                livePomoBlocks: item.livePomoBlocks-1 >= 0 ? item.livePomoBlocks -1 : item.livePomoBlocks, 
            }
            return newItem
        }else{
            return item
        }
    })

    return arr
}