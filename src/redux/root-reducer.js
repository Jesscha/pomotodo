import { combineReducers } from 'redux';
import todoReducer from './todo/todo.reducer';

const rootReducer = combineReducers({
    todoItem : todoReducer
   
})



export default rootReducer;