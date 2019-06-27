export const ADD = "ADD";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE = "DELETE";
export const ADD_BUDGET = "ADD_BUDGET";
export const UPDATE_BUDGET = "UPDATE_BUDGET";
const initialState = {
  items: []
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case TOGGLE_COMPLETED:
      const newItems = state.items.map((item, index) => {
        console.log(action.payload, index);
        if (index === action.payload.id) {
          return {
            value: item.value,
            completed: !item.completed,
            price: action.payload.price
          };
        }
        return item;
      });
      return {
        ...state,
        items: newItems
      };
    case DELETE:
      const filteredItems = state.items
        .slice(0, action.payload)
        .concat(state.items.slice(action.payload + 1));
      console.log(filteredItems, action.payload);
      return {
        ...state,
        items: filteredItems
      };
    default:
      return { ...state };
  }
};

export const budgetReducer = (state = {}, action) => {
  switch (action.type) {
 
    case ADD_BUDGET:
      return {
        ...state,
        budget: action.payload
      };
    case UPDATE_BUDGET:
      return {
        ...state,
        budget: state.budget - action.payload.price
      };
    default:
      return { ...state };
  }
};
