import {
  ADD,
  DELETE,
  ADD_BUDGET,
  TOGGLE_COMPLETED,
  UPDATE_BUDGET
} from "../reducers/shoppingReducer";

export const addItem = item => {
  return {
    type: ADD,
    payload: item
  };
};

export const addBudget = budget => {
  return {
    type: ADD_BUDGET,
    payload: budget
  };
};
// export const updateBudget = price => {
//   return {
//     type: UPDATE_BUDGET,
//     payload: price
//   };
// };
export const updateBudget = (partyId, price) => {
  return {
    type: UPDATE_BUDGET,
    payload: {price, partyId}
  };
};

export const toggleCompleted = (id, price) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: { id, price }
  };
};

export const deleteItem = id => {
  return {
    type: DELETE,
    payload: id
  };
};
