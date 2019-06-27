import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://bwpartyplanner.herokuapp.com/api/user/login", creds)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem('user_id', res.data.user_id)

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      console.log("login error", err);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
    });
};

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const register = creds => dispatch => {
  dispatch({
      type: REGISTER_USER
  })

  return axios
      .post('https://bwpartyplanner.herokuapp.com/api/user/register', creds)
      .then(res => {
          dispatch({
              type: REGISTER_USER_SUCCESS,
              payload: res.data.password
          })
      })
      .catch(err => {
          console.log("Error Registering user", err)
          dispatch({
              type: REGISTER_USER_FAILURE,
              payload: err
          })
      })
}
