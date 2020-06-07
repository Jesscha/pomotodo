import { TodoActionType } from "./todo.types";
import {
  removeFromList,
  changeLiveAndFinishedPomoblocks,
  increasePomoBlocks,
  decreasePomoBlocks,
  refreshPomoBlocks
} from "./todo.utils";

const INITIAL_STATE = {
  todoItems: [],
  doneItems: [],
  achievedBlocks: 0
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionType.ADD_ITEM:
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload],
      };

    case TodoActionType.MOVE_TO_DONE:
      return {
        ...state,
        todoItems: removeFromList(state.todoItems, action.payload),
        doneItems: [...state.doneItems, action.payload],
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
    default:
      return state;
  }
};

export default todoReducer;
