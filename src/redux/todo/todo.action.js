import { TodoActionType } from "./todo.types"


export const addItem = (item) =>({
    type:TodoActionType.ADD_ITEM,
    payload: item
})

export const moveToDone =(item)=>({
    type: TodoActionType.MOVE_TO_DONE,
    payload: item
})