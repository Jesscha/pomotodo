import { TodoActionType } from "./todo.types";

import configureStore from "redux-mock-store";
import { addItem, moveToDone } from "./todo.action";

describe("Todo actions", () => {
  const mockStore = configureStore([]);

  it("should dispatch action", () => {
    const initialState = {};
    const store = mockStore(initialState);
    store.dispatch(
      addItem({
        id: 1,
        todoItem: "abc",
        pomoCount: 4,
      })
    );

    const actions = store.getActions();
    const expectedPayload = {
      type: TodoActionType.ADD_ITEM,
      payload: {
        id: 1,
        todoItem: "abc",
        pomoCount: 4,
      },
    };
    expect(actions).toEqual([expectedPayload]);
  });

  it("should create a moveToDone Action", ()=>{
    const mockItem = {
      id: 1
    }
    const action = moveToDone(mockItem);
    expect(action.type).toEqual(TodoActionType.MOVE_TO_DONE)
    expect(action.payload).toEqual(mockItem)
  });

  



});
