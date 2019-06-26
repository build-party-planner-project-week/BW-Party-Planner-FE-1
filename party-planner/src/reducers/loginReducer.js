import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "../actions/loginActions";

const initialState = {
  error: "",
  fetchingData: false,
  loggingIn: false,
  isRegistering: false,
  registerSuccessful: false,
  user_id: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: "",
        user_id: action.payload.user_id
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload.message
      };
    case REGISTER_USER:
      return {
        ...state,
        isRegistering: true,
        error: null
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        error: null,
        registerSuccessful: action.payload
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload.message
      };

    default:
      return state;
  }
};
