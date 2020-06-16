import { TodoActionType } from "./todo.types";
import {
  removeFromList,
  changeLiveAndFinishedPomoblocks,
  increasePomoBlocks,
  decreasePomoBlocks,
  refreshPomoBlocks
} from "./todo.utils";
import { itemPerTodoList, itemPerDoneList } from "../../assets/todo.variables";

const INITIAL_STATE = {
  todoItems: [],
  doneItems: [],
  achievedBlocks: 0,
  todoPage: 1,
  donePage: 1
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionType.ADD_ITEM:
      return {
        ...state,
        todoItems: [ action.payload, ...state.todoItems],
      };

    case TodoActionType.MOVE_TO_DONE:
      return {
        ...state,
        todoItems: removeFromList(state.todoItems, action.payload),
        doneItems: [action.payload, ...state.doneItems ],
        achievedBlocks: state.achievedBlocks + action.payload.finishedPomoBlocks
      };

    case TodoActionType.MOVE_BACK:
      return {
        ...state,
        todoItems: refreshPomoBlocks(state.todoItems, action.payload),
        doneItems: removeFromList(state.doneItems, action.payload),
      };

    case TodoActionType.DELETE_FROM_TODO:
      return {
        ...state,
        todoItems: removeFromList(state.todoItems, action.payload),
      };

    case TodoActionType.DELETE_FROM_DONE:
      return {
        ...state,
        doneItems: removeFromList(state.doneItems, action.payload),
      };

    case TodoActionType.FIRE_TIMER:
      return {
        ...state,
        todoItems: changeLiveAndFinishedPomoblocks(
          state.todoItems,
          action.payload
        ),
      };

    case TodoActionType.POMO_INCREASE:
      return {
        ...state,
        todoItems: increasePomoBlocks(state.todoItems, action.payload),
      };

    case TodoActionType.POMO_DECREASE:
      return {
        ...state,
        todoItems: decreasePomoBlocks(state.todoItems, action.payload),
      };

    case TodoActionType.CLEAR_ACHEIVEMENT:
      return {
        ...state,
        achievedBlocks: 0
      }

    case TodoActionType.TODO_PAGE_UP:
      return {
        ...state,
        todoPage: state.todoPage + 1 <= Math.ceil(state.todoItems.length / itemPerTodoList) ? state.todoPage + 1 : state.todoPage
      }

    case TodoActionType.TODO_PAGE_DOWN:
    return {
      ...state,
      todoPage: state.todoPage - 1 > 0 ? state.todoPage - 1 : state.todoPage
    }

    case TodoActionType.DONE_PAGE_UP:
      return {
        ...state,
        donePage: state.donePage + 1 <= Math.ceil(state.doneItems.length / itemPerDoneList) ? state.donePage + 1 : state.donePage
      }

    case TodoActionType.DONE_PAGE_DOWN:
    return {
      ...state,
      donePage: state.donePage - 1 > 0 ? state.donePage - 1 : state.donePage
    }

    

    default:
      return state;
  }
};

export default todoReducer;
