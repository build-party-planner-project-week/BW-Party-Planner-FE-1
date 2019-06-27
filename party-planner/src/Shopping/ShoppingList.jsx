import React, { Component } from "react";
import { connect } from "react-redux";
import ShoppingItem from "./ShoppingItem";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.items)
    // this.props.items.map(item => console.log(item + 'partyId' + this.props.party_id))
    return (
      <div>

        {this.props.items
          .filter(item => {
            return item.party_id === this.props.party_id
            
          })
          .map((item, index) => (
            <ShoppingItem
              key={index}
              item={item}
              index={index}
              party_id={this.props.party_id}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  };
};

export default connect(mapStateToProps)(ShoppingList);
