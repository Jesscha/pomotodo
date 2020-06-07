import { TodoActionType } from "./todo.types"


export const addItem = (item) =>({
    type:TodoActionType.ADD_ITEM,
    payload: item
})

export const moveToDone =(item)=>({
    type: TodoActionType.MOVE_TO_DONE,
    payload: item
})

export const moveBackToList  =(item)=>({
    type: TodoActionType.MOVE_BACK,
    payload: item
})

export const deleteItemFromToDo = (item)=>({
    type: TodoActionType.DELETE_FROM_TODO,
    payload: item
})


export const deleteItemFromDone = (item)=>({
    type: TodoActionType.DELETE_FROM_DONE,
    payload: item
})


export const fireTimer = (item) =>({
    type: TodoActionType.FIRE_TIMER,
    payload: item
})

export const pomoblockIncrease = item =>({
    type: TodoActionType.POMO_INCREASE,
    payload: item
})

export const pomoblockDecrease = item =>({
    type: TodoActionType.POMO_DECREASE,
    payload: item
})

export const clearAcheivedBlocks = ()=>({
    type : TodoActionType.CLEAR_ACHEIVEMENT
})

