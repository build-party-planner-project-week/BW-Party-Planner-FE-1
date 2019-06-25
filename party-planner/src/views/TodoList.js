import React from "react";
import Todo from '../components/Todo'


class TodoList extends React.Component {
  state = {
    todos: [],
    todoTitle: ""
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addTodo = e => {
    e.preventDefault();
    const todoItem = {
      title: this.state.todoTitle,
      completed: false
    };
    this.props.addTodoItem(todoItem);
    this.setState({ todoTitle: "" });
  };

  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Todo key={todo.id} todo={todo} toggleTodoItem={this.props.toggleTodoItem}/>
          );
        })}
        <form onSubmit={this.addTodo}>
          <input
            placeholder="enter todo item..."
            name="todoTitle"
            value={this.state.todoTitle}
            onChange={this.handleChanges}
          />
        </form>
      </div>
    );
  }
}

export default TodoList;
