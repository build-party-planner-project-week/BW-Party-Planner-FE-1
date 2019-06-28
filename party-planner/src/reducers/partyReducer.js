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
  GET_PARTIES_SUCCESS,
  DELETE_PARTY_SUCCESS
} from "../actions/partyCreateActions";
import {ADD_BUDGET, UPDATE_BUDGET, ADD} from '../reducers/shoppingReducer'

const initialState = {
  parties: [],
  theme: "",
  guests: "",
  budget: '',
  date: "",
  todoList: [
  ],
  creating: false,
  addingItem: false, //maybe used to indicate that user is adding item to todo or shopping list and is communicating with server
  shoppingList: [],
  message: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTY_START:
      return {
        ...state,
        creating: true,
        message: null
      };
    case CREATE_PARTY_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        creating: false,
        message: `${action.payload} was successfully created!`
      };

    case CREATE_PARTY_FAILED:
      return {
        ...state,
        creating: false,
        message: `Couldn't create ${action.payload} party ${action.err}`
      }

    case GET_PARTIES:
      return {
        ...state,
        creating: true
      };
    case GET_PARTIES_SUCCESS:
      return {
        ...state,
        parties: action.payload,
        creating: false
      };
      case ADD_BUDGET:
        return {
          ...state,
          parties: state.parties.map(party => {
            if(party.party_id === action.payload.partyId){
              party.budget = action.payload.budget
              return party
            } else {
              return party
            }
          })
        }
        // case ADD:
        //     let newParties = state.parties.map(party => {
        //       if(party.party_id === action.payload.partyId){
        //         if(!party.items){
        //           party.items = []
        //         } party.items.push(action.payload.item)
        //         return party
        //       } else {
        //         return party
        //       }
        //     })

        //     return {
        //         ...state,
        //         parties: newParties
        //     }
    
      case UPDATE_BUDGET:
        return {
          ...state,
          // parties: state.parties.map(party)
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
