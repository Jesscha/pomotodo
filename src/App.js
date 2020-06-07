import React from 'react';
import './App.css';
import InputContainer from './component/input-container/Inputcontainer.component';
import TodoContainer from './component/todo-container/todoContainer.component';
import DoneContainer  from './component/done-container/doneContainer.component';
import BlockAcheivedContainer from './component/block-acheived-container/blockAcheivedContainer.component';

function App() {
  return (
    <div className="App">
      <InputContainer />
      <TodoContainer />
      <DoneContainer />
      <BlockAcheivedContainer/>
    </div>
  );
}


export default App;


