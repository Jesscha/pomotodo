import React from 'react'
import { connect } from 'react-redux';


class InputContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoInput: "",
            pomoCount: 1
        }
    }
    changeState(e){
        const {name, value} = e.target
        this.setState({[name] : value})
    }
    
    initializeState(){
        this.setState(
            {
                todoInput: "",
                pomoCount: 1
            }
        )
    }

    render(){
        return(
            <div className="input-container">
                <input type="text" name="todoInput" value={this.state.todoInput} id="todo-input" onChange={(e)=>this.changeState(e)} placeholder="To-Do Item"/>
                <input type="number" name="pomoCount" onChange={(e)=>this.changeState(e)} value={this.state.pomoCount} id="pomo-count"/>
                <button onClick={()=>{this.initializeState()}}>Add to List</button>
            </div>
        )
    }
   
}

const mapDispatchToProps = dispatch =>{
    
}

export default InputContainer