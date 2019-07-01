import { axiosWithAuth } from "../utility/axiosWithAuth";

//         LOGIN           //////////////
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const logIn = creds => disptach => {
  disptach({ type: LOGIN_START });
  //connect to server axios request
};

//TodoList
export const ADD_TODO_START = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILED = "ADD_TODO_FAILED";

export const addTodo = (partyId, todo) => dispatch => {
  dispatch({ type: ADD_TODO_START, payload: todo });
  //make axios request and dispatch other actions based on resolved or rejected
  axiosWithAuth()
    .post(`/${partyId}/todolist`, todo)
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_TODO_SUCCESS, payload: todo });
    })
    .catch(err => {
      console.log(err);
    });
  dispatch({ type: ADD_TODO_SUCCESS, payload: todo });

};

export const GET_TODOS_START = "GET_TODOS_START"
export const GET_TODOS_SUCCESS= "GET_TODOS_SUCCESS"
export const GET_TODO_FAILED = "GET_TODOS_FAILED"
// export const getTodos = partyId => dispatch => {
//   axiosWithAuth()
//     .get(`28/todolist`)
//     .then(res => {
//       console.log(res);
//       dispatch({type: GET_TODOS_SUCCESS, payload: res.data})
      
//     })
//     .catch(err => {
//       console.log(err);
//       dispatch({type: GET_TODO_FAILED})
//     });
// };

export const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleTodo = todoId => {
  return {
    type: TOGGLE_TODO,
    payload: todoId
  };
};
export const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = todoId => {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
};
