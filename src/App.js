import React from 'react';
import './App.css';
import InputContainer from './component/input-container/Inputcontainer.component';
import TodoContainer from './component/todo-container/todoContainer.component';
import DoneContainer  from './component/done-container/doneContainer.component';
import BlockAcheivedContainer from './component/block-acheived-container/blockAcheivedContainer.component';
import Apptitle  from './component/app-title/appTitle.components';
import red from '@material-ui/core/colors/red';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

function App() { 
  return (
    <MuiThemeProvider theme= {theme}>
    <div className="App">
      <Apptitle />
      <InputContainer />
      <TodoContainer />
      <DoneContainer />
      <BlockAcheivedContainer/>
    </div>
    </MuiThemeProvider>
  );
}


export default App;


