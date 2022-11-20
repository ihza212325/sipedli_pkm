import { COMPANY_FETCH, ERROR_MESSAGE, LOADING } from "../actionType";

const initialState = {
  error: null,
  loading: false,
  companies: [],
};
function companyReducer(state = initialState, action) {
  // console.log(action.payload);
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
    case COMPANY_FETCH: {
      return {
        ...state,
        companies: action.payload,
      };
    }

    default:
      return state;
  }
}

export default companyReducer;
