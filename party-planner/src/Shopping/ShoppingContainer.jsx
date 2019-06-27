import React from 'react';
import ShoppingList from './ShoppingList';
import ShoppingForm from './ShoppingForm';

function ShoppingContainer(props) {
  return (
    <div className="App">
      <h3>Shopping List</h3>
      <ShoppingForm partyBudget={props.budget}/>
      <ShoppingList />
    </div>
  );
}

export default ShoppingContainer;
