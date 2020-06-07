import { combineReducers } from 'redux';
import todoReducer from './todo/todo.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key : 'root',
    storage,
    whitelist: ['todoItem']
};

const rootReducer = combineReducers({
    todoItem : todoReducer
   
});



export default persistReducer(persistConfig, rootReducer);