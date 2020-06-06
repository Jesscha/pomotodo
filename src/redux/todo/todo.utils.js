import rootReducer from "../root-reducer";


export const removeFromList = (todoItems, itemToMove)=>{
    const arr =  todoItems.filter(item => item.id !== itemToMove.id);
    return arr
}

export const changeLiveAndFinishedPomoblocks = ((todoItems, itemToMove)=>{
    
    return todoItems.map(item => { 
        if (item.id === itemToMove.id){
            const newItem = {
                ...item,
                livePomoBlocks: item.livePomoBlocks-1, 
                finishedPomoBlocks: item.finishedPomoBlocks +1
            }
            return newItem
        }else{
            return item
        }

    });
    

})