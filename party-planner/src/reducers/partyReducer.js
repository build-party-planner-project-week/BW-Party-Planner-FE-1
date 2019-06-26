import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILED,
  TOGGLE_TODO,
  DELETE_TODO
} from "../actions";
import {
  CREATE_PARTY_START,
  CREATE_PARTY_SUCCESS,
  CREATE_PARTY_FAILED,
  GET_PARTIES,
  GET_PARTIES_SUCCESS
} from "../actions/partyCreateActions";

const initialState = {
  parties: [],
  theme: "",
  guests: "",
  budget: 100,
  date: "",
  todoList: [
 //I think server would have to add ids
  ],
  creating: false,
  addingItem: false, //maybe used to indicate that user is adding item to todo or shopping list and is communicating with server
  shoppingList: [],
  error: null
};
 
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTY_START:
      return {
        ...state,
        creating: true
      }
      case GET_PARTIES: 
      return {
        ...state,
      }
      case GET_PARTIES_SUCCESS:
        return {
          ...state,
          parties: action.payload
        }
    case ADD_TODO_START:
      return {
        ...state
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        error: ""
      };
    case ADD_TODO_FAILED:
      return {
        ...state,
        error: `Couldn't add todo`
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};
