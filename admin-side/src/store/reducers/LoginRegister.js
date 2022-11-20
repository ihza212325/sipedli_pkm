import { ERROR_MESSAGE, LOADING, LOGIN } from "../actionType";

const initialState = {
  error: null,
  loading: false,
  isLogin: false,
};
function loginRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case LOGIN: {
      console.log("lonotng");
      console.log(action.payload, "<><><><><<<<<<<");
      return {
        ...state,
        isLogin: action.payload,
      };
    }

    default:
      return state;
  }
}

export default loginRegisterReducer;
