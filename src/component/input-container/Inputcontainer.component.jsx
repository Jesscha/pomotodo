import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/todo/todo.action';
import './inputcontainer.styles.scss';
import { Paper, TextField, Button } from '@material-ui/core'
import { NumberFormatCustom } from './inputcontainer.utils';
import { maxPomoBlocks } from '../../assets/todo.variables';


export class InputContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            pomoCount: ''
        }
    }
    changeState(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    initializeState() {
        this.setState(
            {
                name: "",
                pomoCount: ""
            }
        )
    }

    itemAppending(e, callback) {
        e.preventDefault()
        // 중복되지 않은 아이디를 만들도록 년도+월+시+분+초를 더해서 아이디로 씀
        const date = new Date()
        const id = date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds() + parseInt(Math.random() * 100)
        if ((parseInt(this.state.pomoCount)) > 100) {
            this.initializeState()
            return
        }
        if (this.state.name !== "" && this.state.pomoCount !== "") {
            const item = {
                id,
                name: this.state.name,
                pomoCount: parseInt(this.state.pomoCount) > maxPomoBlocks ? maxPomoBlocks : parseInt(this.state.pomoCount),
                livePomoBlocks: parseInt(this.state.pomoCount) > maxPomoBlocks ? maxPomoBlocks : parseInt(this.state.pomoCount),
                finishedPomoBlocks: 0
            }
            callback(item)
        }
        this.initializeState()
    }


    render() {
        return (
            <div id="inputContainer" className="mobile-input-container"
            >
                <Paper className="container input-container">
                    <h3 className="input-title">
                        <span role="img" aria-label="emoji"> ✍🏼 </span>
                        Define Your Enemy </h3>
                    <form className="input-form" onSubmit={(e) => { this.itemAppending(e, this.props.addItem) }}>
                        <div>
                            <TextField label="I need to do..." name="name" value={this.state.name} className="todo-input" onChange={(e) => this.changeState(e)} />
                            <TextField label="# of 25-mins" name="pomoCount" onChange={(e) => this.changeState(e)} value={this.state.pomoCount} className="pomo-count" min="0" max="10" InputProps={{
                                inputComponent: NumberFormatCustom,
                            }} />
                        </div>


                        <Button className="add-button" variant="contained" color="primary" type="submit"
                        >Add to List</Button>
                    </form>
                </Paper>
            </div>

        )
    }
}



const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(InputContainer);