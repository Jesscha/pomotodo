import { TodoActionType } from "./todo.types";
import { moveTodoItem } from "./todo.utils";

const INITIAL_STATE = { 
    todoItems: [],
    doneItems: [] 
};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TodoActionType.ADD_ITEM:
            return {
                ...state,
                todoItems: [...state.todoItems, action.payload]
            }

        case TodoActionType.MOVE_TO_DONE:
            return {
                ...state,
                todoItems: moveTodoItem(state.todoItems, action.payload),
                doneItems : [...state.doneItems, action.payload]
            }

        default:
            return state
    }
};

export default todoReducer;

