import React from "react";
import TodoList from "./TodoList";
import ShoppingContainer from '../Shopping/ShoppingContainer'
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions";
import {deleteParty} from '../actions/partyCreateActions'

//will connect to redux stare and pass info through props
class Party extends React.Component {
  state = {};
  //Render Todo list
  //render shopping list
  deleteParty = () => {
    console.log(this.props.party.id)
    this.props.deleteParty(this.props.party.id)
  }
  addTodoItem = todoItem => {
    this.props.addTodo(todoItem);
  };
  toggleTodoItem = todoId => {
    this.props.toggleTodo(todoId);
  };
  deleteTodoItem = todoId => {
    this.props.deleteTodo(todoId)
  }
  render() {
    const {guests, theme, date, budget} = this.props.party;
    return (
      <div className="party">
        <button onClick={this.deleteParty}>Delete</button>
        <h2 className="party-title">Sam's Birthday</h2>
        <h4><span>Party Theme:</span> {theme}</h4>
        <h4><span>Guests:</span>{guests}</h4>
        <h5><span>Date:</span>{date}</h5>
        <h5><span>Budget:</span>${this.props.budget.budget}</h5>


      <div className="party-split">
        <TodoList
          todos={this.props.todos}
          addTodoItem={this.addTodoItem}
          toggleTodoItem={this.toggleTodoItem}
          deleteTodoItem={this.deleteTodoItem}
        />
        <hr />
        <ShoppingContainer />
        </div>
      </div>
    );
  }
}

//each party probably will need its own id
const mapStateToProps = state => {
  return {
    todos: state.partyReducer.todoList,
    budget: state.budget
  };
};
export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, deleteTodo, deleteParty }
)(Party);
