import {
  ERROR_MESSAGE,
  JOB_DETAIL,
  JOB_FETCH,
  LOADING_FALSE,
  LOADING_TRUE,
} from "../actionType";
// import { logger } from "./middlewares/logger";
const initialState = {
  loading: false,
  error: null,
  jobs: [],
  user: [],
  job: {},
  company: {},
};

function jobReducer(state = initialState, action) {
  console.log("anjay");
  console.log(action.type);
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case JOB_FETCH:
      console.log("lontongsss");
      return {
        ...state,
        jobs: action.payload,
      };
    case JOB_DETAIL:
      return {
        ...state,
        job: action.payload,
        company: action.payload.company,
      };
    default:
      return state;
  }
}
// const jobStore = createStore(jobReducer);
export default jobReducer;
