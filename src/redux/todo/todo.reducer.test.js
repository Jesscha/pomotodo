import todoReducer from "./todo.reducer";
import { TodoActionType } from "./todo.types";

import configureStore from "redux-mock-store";

describe("Todo reducers", () => {
  const initialState = {
    todoItems: [],
    doneItems: [],
  };

  it("should return the initial state", () => {
    expect(todoReducer(undefined, {})).toEqual(initialState);
  });

  it("should increase number of todo Items if action fired", () => {
    const mockPrevState = {
      todoItems: [],
    };
    expect(
      todoReducer(mockPrevState, {
        type: TodoActionType.ADD_ITEM,
        payload: {
          id: 1,
          name: "abc",
          pomoCount: 4,
        }
      }).todoItems.length
    ).toEqual(1);
  });

  it("should move Item from todolist to DoneList", ()=>{
    const mockPrevState = {
      todoItems: [{
        id: 1,
        name:"item to be moved",
        pomoCount: 4
      }],
      doneItems: []
    };
    const reducerOutput =todoReducer(mockPrevState, {
      type: TodoActionType.MOVE_TO_DONE,
      payload:{
        id: 1,
        name:"item to be moved",
        pomoCount: 4
      }
    })
    expect(
      reducerOutput.doneItems.length
    ).toEqual(1);
    expect(
      reducerOutput.todoItems.length
    ).toEqual(0);
  })
});
