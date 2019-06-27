import React from "react";
import Todo from "../components/Todo";

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
        <h3>TodoList</h3>
        {this.props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodoItem={this.props.toggleTodoItem}
              deleteTodoItem={this.props.deleteTodoItem}
            />
          );
        })}
        <form onSubmit={this.addTodo} className="party-form">
          <input
            placeholder="Enter Todo Item"
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
