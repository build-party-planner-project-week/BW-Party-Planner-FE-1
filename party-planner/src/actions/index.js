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

export const addTodo = todo => dispatch => {
  dispatch({ type: ADD_TODO_START });
  //make axios request and dispatch other actions based on resolved or rejected
  axiosWithAuth()
    .post(`/todolist/`)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_TODO_SUCCESS, payload: todo });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getTodos = () => dispatch => {
  axiosWithAuth()
    .get(`todolist`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

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
