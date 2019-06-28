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
    const randomNumber = Math.floor(Math.random() * 10000)

    e.preventDefault();
    const todoItem = {
      todoId: randomNumber,
      party_id: this.props.party_id,
      title: this.state.todoTitle,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, todoItem]
    })
    this.props.addTodoItem(todoItem);
    this.setState({ todoTitle: "" });
  };
  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.todoId !==todoId)
    })
    console.log(this.props.todos.filter(todo => todo.todoId !==todoId))
  }
  render() {
    return (
      <div>
        <h3>TodoList</h3>
        {this.state.todos
          .filter(todo => todo.party_id === this.props.party_id)
          .map(todo => {
            return (
              <Todo
                key={todo.todoId}
                todo={todo}
                toggleTodoItem={this.props.toggleTodoItem}
                // deleteTodoItem={this.props.deleteTodoItem}
                deleteTodo={this.deleteTodo}
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
