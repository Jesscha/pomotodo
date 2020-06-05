import { TodoActionType } from "./todo.types";

const INITIAL_STATE = { 
    todoItems: [] 
};

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TodoActionType.ADD_ITEM:
            return {
                ...state,
                todoItems: [...state.todoItems, action.payload]
            }

        default:
            return state
    }
};

export default todoReducer;

