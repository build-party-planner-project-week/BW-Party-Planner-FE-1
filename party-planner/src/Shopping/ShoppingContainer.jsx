import React from 'react';
import ShoppingList from './ShoppingList';
import ShoppingForm from './ShoppingForm';

function ShoppingContainer() {
  return (
    <div className="App">
      <h3>Shopping List</h3>
      <ShoppingForm />
      <ShoppingList />
    </div>
  );
}

export default ShoppingContainer;
