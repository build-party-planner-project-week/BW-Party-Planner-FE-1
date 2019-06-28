import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-responsive-modal";
import {
  deleteItem,
  toggleCompleted,
  updateBudget
} from "../actions/shoppingActions";

class ShoppingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  handleToggleCompleted = () => {
    this.setState({
      openModal: true
    });
  };

  handlePriceChange = e => {
    this.setState({
      price: e.target.value
    });
  };

  submitPrice = e => {
    if (!this.state.price) {
      return;
    }
    this.props.toggleCompleted(this.props.index, this.state.price);
    this.props.updateBudget(this.props.party_id, this.state.price);
    this.setState({
      openModal: false
    });
  };

  render() {
    // console.log('testing', this.props.item)
    return (
      <div>
        <Modal
          open={this.state.openModal}
          onClose={() => this.setState({ openModal: false })}
        >
          <div style={{ marginTop: "20px" }}>
            <label htmlFor='price'>Enter the price</label>
            <input onChange={this.handlePriceChange} value={this.state.price} />
            <button onClick={this.submitPrice}>Submit</button>
          </div>
        </Modal>
        <div className='shoppingItem'>
        <h2
          onClick={
            !this.props.item.completed ? this.handleToggleCompleted : () => null
          }
          style={this.props.item.completed ? { color: "black" } : null}
        >
          <span>{this.props.item.value}</span><span> {this.props.item.price} </span>
        </h2>
        {/* <h2>{this.props.budget.value}</h2> */}
        <button className='deleteShoppingItem'  onClick={() => this.props.deleteItem(this.props.index)}>
          X
        </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleCompleted, deleteItem, updateBudget }
)(ShoppingItem);
