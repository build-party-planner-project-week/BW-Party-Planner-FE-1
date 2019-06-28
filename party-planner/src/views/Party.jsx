import React from "react";
import TodoList from "./TodoList";
import ShoppingContainer from "../Shopping/ShoppingContainer";
import { connect } from "react-redux";
import moment from "moment";
import { addTodo, toggleTodo, deleteTodo, getTodos } from "../actions";
import { deleteParty } from "../actions/partyCreateActions";

class Party extends React.Component {
  componentDidMount() {
    this.props.getTodos(this.props.party.party_id);
  }
  deleteParty = () => {
    console.log(this.props.party.party_id);
    this.props.deleteParty(this.props.party.party_id);
  };
  addTodoItem = todoItem => {
    this.props.addTodo(todoItem, this.props.party.party_id);
  };
  toggleTodoItem = todoId => {
    this.props.toggleTodo(todoId);
  };
  deleteTodoItem = todoId => {
    this.props.deleteTodo(todoId);
  };
  render() {
    const { guests, theme, date, budget, title, party_id, items } = this.props.party;
    return (
      <div className="party">
        <button onClick={this.deleteParty}>Delete</button>
        <h2 className="party-title">{title}</h2>
        <h4>
          <span>Party Theme:</span> {theme}
        </h4>
        <h4>
          <span>Guests:</span>
          {guests}
        </h4>
    
        <h5>
          <span>Date:</span>
          {moment(date).format("dddd, MMMM Do  h: a")}
        </h5>
 

        <div className="party-split">
          <TodoList
            todos={this.props.todos}
            addTodoItem={this.addTodoItem}
            toggleTodoItem={this.toggleTodoItem}
            deleteTodoItem={this.deleteTodoItem}
          />
          <hr />
          <ShoppingContainer budget={budget} party_id={party_id} items={items}/>
        </div>
      </div>
    );
  }
}

//each party probably will need its own id
const mapStateToProps = state => {
  return {
    todos: state.partyReducer.todoList,
    budget: state.budget.budget
  };
};
export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, deleteTodo, deleteParty, getTodos }
)(Party);
