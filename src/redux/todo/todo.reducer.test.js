import todoReducer from "./todo.reducer";
import { TodoActionType } from "./todo.types";

import configureStore from "redux-mock-store";

describe("Todo reducers", () => {
  const initialState = {
    todoItems: [],
    doneItems: [],
    achievedBlocks:0
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

  it("should move Item from DoneList to TodoList with 0 finishedBlocks", ()=>{
    const mockPrevState = {
      todoItems: [],
      doneItems: [{
        id: 1,
        name:"item to be moved",
        pomoCount: 4,
        livePomoBlocks: 0,
        finishedPomoBlocks: 4
      }]
    };
    const reducerOutput =todoReducer(mockPrevState, {
      type: TodoActionType.MOVE_BACK,
      payload:{
        id: 1,
        name:"item to be moved",
        pomoCount: 4,
        livePomoBlocks: 0,
        finishedPomoBlocks: 4
      }
    })
    expect(
      reducerOutput.doneItems.length
    ).toEqual(0);
    expect(
      reducerOutput.todoItems[0].livePomoBlocks
    ).toEqual(4);
    expect(
      reducerOutput.todoItems[0].finishedPomoBlocks
    ).toEqual(0);
  })



  it("should remove Item", ()=>{
    const mockPrevState = {
      todoItems: [{
        id: 2,
        name:"item to be removed",
        pomoCount: 2
      }],
      doneItems: [{
        id: 1,
        name:"item to be removed",
        pomoCount: 4
      }]
    };
    const reducerOutput =todoReducer(mockPrevState, {
      type: TodoActionType.DELETE_FROM_TODO,
      payload:{
        id: 2,
        pomoCount: 4
      }
    })
    expect(
      reducerOutput.doneItems.length
    ).toEqual(1);
    expect(
      reducerOutput.todoItems.length
    ).toEqual(0);

    const reducerOutput2 =todoReducer(mockPrevState, {
      type: TodoActionType.DELETE_FROM_DONE,
      payload:{
        id: 1,
        name:"item to be moved",
        pomoCount: 2
      }
    })
    expect(
      reducerOutput2.doneItems.length
    ).toEqual(0);
    expect(
      reducerOutput2.todoItems.length
    ).toEqual(1);
  });

  it("decrease live pomoBlock count and increase finished pomoBlock timer", ()=>{
    const mockPrevState = {
      todoItems: [{
        id: 1,
        name:"item to be modifyied",
        pomoCount: 4,
        livePomoBlocks: 4,
        finishedPomoBlocks: 0
      },{
        id: 664,
        name:"item to stay the same",
        pomoCount: 6,
        livePomoBlocks: 3,
        finishedPomoBlocks: 3
      }
    ],
      doneItems: []
    };
    const reducerOutput =todoReducer(mockPrevState, {
      type: TodoActionType.FIRE_TIMER,
      payload:{
        id: 1,
        name:"item to be modifyied",
        pomoCount: 4,
        livePomoBlocks: 4,
        
      }
    })
    expect(reducerOutput.todoItems.find(item => item.id ===1).livePomoBlocks).toEqual(3);
    expect(reducerOutput.todoItems.find(item => item.id ===1).finishedPomoBlocks).toEqual(1);
  })


  it("increase live pomoCount and livePomoBlocks", ()=>{
    const mockPrevState = {
      todoItems: [{
        id: 1,
        name:"item to be modifyied",
        pomoCount: 4,
        livePomoBlocks: 4,
        finishedPomoBlocks: 0
      },{
        id: 664,
        name:"item to stay the same",
        pomoCount: 6,
        livePomoBlocks: 3,
        finishedPomoBlocks: 3
      }
    ],
      doneItems: []
    };
    const reducerOutput =todoReducer(mockPrevState, {
      type: TodoActionType.POMO_INCREASE,
      payload:{
        id: 1,
        name:"item to be modifyied",
        pomoCount: 4,
        livePomoBlocks: 4,
      }
    })
    expect(reducerOutput.todoItems.find(item => item.id ===1).livePomoBlocks).toEqual(5);
    expect(reducerOutput.todoItems.find(item => item.id ===1).pomoCount).toEqual(5);



  })


  it("decrease live pomoCount and livePomoBlocks", ()=>{
    const mockPrevState = {
      todoItems: [{
        id: 1,
        name:"item to be modifyied",
        pomoCount: 4,
        livePomoBlocks: 4,
        finishedPomoBlocks: 0
      },{
        id: 664,
        name:"item to stay the same",
        pomoCount: 6,
        livePomoBlocks: 3,
        finishedPomoBlocks: 3
      }
    ],
      doneItems: []
    };
    const reducerOutput =todoReducer(mockPrevState, {
      type: TodoActionType.POMO_DECREASE,
      payload:{
        id: 1,
        name:"item to be modifyied",
        pomoCount: 4,
        livePomoBlocks: 4,
        
      }
    })
    expect(reducerOutput.todoItems.find(item => item.id ===1).livePomoBlocks).toEqual(3);
    expect(reducerOutput.todoItems.find(item => item.id ===1).pomoCount).toEqual(3);
  })


  it("clear the number of acheived blocks", ()=>{
    const mockPrevState = {
      todoItems: [],
      doneItems: [],
      achievedBlocks: 5
    };
    const reducerOutput =todoReducer(mockPrevState, {
      type: TodoActionType.CLEAR_ACHEIVEMENT
    }
    )
    expect(reducerOutput.achievedBlocks).toEqual(0);
  })






});
