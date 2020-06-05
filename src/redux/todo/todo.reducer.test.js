import todoReducer from "./todo.reducer";
import { TodoActionType } from "./todo.types";

import configureStore from "redux-mock-store";

describe("Todo reducers", () => {
  const initialState = {
    todoItems: [],
  };

  it("should return the initial state", () => {
    expect(todoReducer(undefined, {})).toEqual(initialState);
  });

  
});
