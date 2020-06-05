import { TodoActionType } from "./todo.types"


export const addItem = (item) =>({
    type:TodoActionType.ADD_ITEM,
    payload: item
})