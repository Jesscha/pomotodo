import { TodoActionType } from "./todo.types";

import configureStore from "redux-mock-store";
import { addItem } from "./todo.action";

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


});
