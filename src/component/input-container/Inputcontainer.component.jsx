import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/todo/todo.action';


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

    itemAppending(callback){
        // 중복되지 않은 아이디를 만들도록 년도+월+시+분+초를 더해서 아이디로 씀
        const date = new Date()
        const id = date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds()
        
        const item = {
            id,
            todoInput: this.state.todoInput,
            pomoCount: this.state.pomoCount
        }
        callback(item)
        this.initializeState();
    }

    render({addItem}){
        return(
            <div className="input-container">
                <input type="text" name="todoInput" value={this.state.todoInput} id="todo-input" onChange={(e)=>this.changeState(e)} placeholder="To-Do Item"/>
                <input type="number" name="pomoCount" onChange={(e)=>this.changeState(e)} value={this.state.pomoCount} id="pomo-count"/>
                <button onClick={()=>{this.itemAppending(addItem)}}>Add to List</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    addItem: item => dispatch(addItem(item))
}

export default connect(null, mapDispatchToProps)(InputContainer);