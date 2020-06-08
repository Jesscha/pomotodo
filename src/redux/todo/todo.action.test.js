import { TodoActionType } from "./todo.types";

import configureStore from "redux-mock-store";
import { addItem, moveToDone, moveBackToList, deleteItemFromDone, deleteItemFromToDo, fireTimer, pomoblockIncrease, pomoblockDecrease, clearAcheivedBlocks, todoItemPageUp, todoItemPageDown, doneItemPageUp, doneItemPageDown} from "./todo.action";

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


  it("should create a moveBackToList Action", ()=>{
    const mockItem = {
      id: 1
    }
    const action = moveBackToList(mockItem);
    expect(action.type).toEqual(TodoActionType.MOVE_BACK)
    expect(action.payload).toEqual(mockItem)
  });


  it("should create a Delete Action", ()=>{
    const mockItem = {
      id: 1
    }
    const todoDeleteAction = deleteItemFromToDo(mockItem);
    expect(todoDeleteAction.type).toEqual(TodoActionType.DELETE_FROM_TODO)
    expect(todoDeleteAction.payload).toEqual(mockItem)

    const doneDeleteAction = deleteItemFromDone(mockItem);
    expect(doneDeleteAction.type).toEqual(TodoActionType.DELETE_FROM_DONE)
    expect(doneDeleteAction.payload).toEqual(mockItem)

    
  });

  it("should create a Delete Action", ()=>{
    const mockItem = {
      id: 1
    }
    const fireAction = fireTimer(mockItem)
    expect(fireAction.type).toEqual(TodoActionType.FIRE_TIMER)
    expect(fireAction.payload).toEqual(mockItem)
  });

  it("should create a PomoBlock increase Action", ()=>{
    const mockItem = {
      id: 1
    }
    const fireAction = pomoblockIncrease(mockItem)
    expect(fireAction.type).toEqual(TodoActionType.POMO_INCREASE)
    expect(fireAction.payload).toEqual(mockItem)
  });

  it("should create a PomoBlock decrease Action", ()=>{
    const mockItem = {
      id: 1
    }
    const fireAction = pomoblockDecrease(mockItem)
    expect(fireAction.type).toEqual(TodoActionType.POMO_DECREASE)
    expect(fireAction.payload).toEqual(mockItem)
  });


  it("should create a clear blocks Action", ()=>{
    
    const fireAction = clearAcheivedBlocks();
    expect(fireAction.type).toEqual(TodoActionType.CLEAR_ACHEIVEMENT);
  });

  it("should create a todo page-up Action", ()=>{
    
    const fireAction = todoItemPageUp();
    expect(fireAction.type).toEqual(TodoActionType.TODO_PAGE_UP);
  });


  it("should create a todo page-down Action", ()=>{
    
    const fireAction = todoItemPageDown();
    expect(fireAction.type).toEqual(TodoActionType.TODO_PAGE_DOWN);
  });

  it("should create a done page-up Action", ()=>{
    
    const fireAction = doneItemPageUp();
    expect(fireAction.type).toEqual(TodoActionType.DONE_PAGE_UP);
  });


  it("should create a done page-down Action", ()=>{
    
    const fireAction = doneItemPageDown();
    expect(fireAction.type).toEqual(TodoActionType.DONE_PAGE_DOWN);
  });
  
});
