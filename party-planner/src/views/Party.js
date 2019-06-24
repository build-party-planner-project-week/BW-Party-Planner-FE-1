import React from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

//will connect to redux stare and pass info through props
class Party extends React.Component {
  state = {};
  //Render Todo list
  //render shopping list

  addTodoItem = todoItem => {
    this.props.addTodo(todoItem);
  };
  toggleTodoItem = todoId => {
      console.log(todoId)
    this.props.toggleTodo(todoId);
  };
  render() {

    return (
      <div>
        <h1>Party!</h1>
        <TodoList
          todos={this.props.todos}
          addTodoItem={this.addTodoItem}
          toggleTodoItem={this.toggleTodoItem}
        />
      </div>
    );
  }
}

//each party probably will need its own id
const mapStateToProps = state => {
  return {
    todos: state.partyReducer.todoList
  };
};
export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(Party);
