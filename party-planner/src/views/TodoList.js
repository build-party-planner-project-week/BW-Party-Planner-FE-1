import React from 'react'

class TodoList extends React.Component {
    state = {
        todoItem: ''
    }

    handleChanges = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div>
                <form>
                    <input placeholder="enter todo item..." name="todoItem" value={this.state.todoItem} onChange={this.handleChanges}/>
                </form>
            </div>
        )
    }
}

export default TodoList