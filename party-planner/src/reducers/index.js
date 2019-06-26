import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import partyReducer from "./partyReducer";
import { itemReducer } from "./shoppingReducer";
import { budgetReducer } from "./shoppingReducer";

export default combineReducers({
  loginReducer,
  partyReducer,
  items: itemReducer,
  budget: budgetReducer
});
