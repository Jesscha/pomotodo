import { TodoActionType } from "./todo.types";
import { removeFromList} from "./todo.utils";

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
                todoItems: removeFromList(state.todoItems, action.payload),
                doneItems : [...state.doneItems, action.payload]
            }
        case TodoActionType.MOVE_BACK:
            return {
                ...state,
                todoItems: [...state.todoItems, action.payload],
                doneItems: removeFromList(state.doneItems, action.payload)
            }

        case TodoActionType.DELETE_FROM_TODO:
            return {
                ...state,
                todoItems: removeFromList(state.todoItems, action.payload)
            }
        
        case TodoActionType.DELETE_FROM_DONE:
            return {
                ...state,
                doneItems: removeFromList(state.doneItems, action.payload),
            }


        default:
            return state
    }
};

export default todoReducer;

