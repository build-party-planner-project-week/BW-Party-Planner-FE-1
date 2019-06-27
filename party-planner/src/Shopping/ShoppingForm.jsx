import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, addBudget } from "../actions/shoppingActions";


class ShoppingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      budget: this.props.partyBudget
    };
  }

  handleAdd = event => {
    event.preventDefault();
    if (this.state.budget) {
      this.props.addBudget(this.state.budget);
      this.setState({ budget: "" });
    }

    if (this.state.item) {
      this.props.addItem({ value: this.state.item, completed: false });
      this.setState({ item: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleAdd} className="party-form">
        {this.props.budget && <h3>Your Budget is : {this.props.budget}</h3>}
        <input
        className='inputbar'
          onChange={event => this.setState({ item: event.target.value })}
          name='value'
          value={this.state.item}
          placeholder='Enter Item Here'
        />
        <input
        className='inputbar'
          type='number'
          onChange={event => this.setState({ budget: event.target.value })}
          name='value'
          value={this.props.budget || this.state.budget}
          placeholder='Enter Budget Here'
        />
        <button className='shopping-submit'>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    budget: state.budget.budget
  };
};

export default connect(
  mapStateToProps,
  { addItem, addBudget }
)(ShoppingForm);

