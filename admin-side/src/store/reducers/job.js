import {
  ERROR_MESSAGE,
  JOB_DETAIL,
  JOB_FETCH,
  LOADING_FALSE,
  LOADING_TRUE,
  SKILL_FETCH,
} from "../actionType";
// import { logger } from "./middlewares/logger";
const initialState = {
  loading: false,
  error: null,
  jobs: [],
  user: [],
  job: {},
  company: {},
  skills: [],
};

function jobReducer(state = initialState, action) {
  // console.log("anjay");
  // console.log(action.type);
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
      // console.log("lontongssass");
      // console.log(action.payload.rows);
      return {
        ...state,
        jobs: action.payload.rows,
        // skills: action.payload.rows.Skills,
        // companies: action.payload.rows.company,
        // user: action.payload.rows.user,
      };
    case JOB_DETAIL:
      return {
        ...state,
        job: action.payload,
        company: action.payload.company,
      };
    case SKILL_FETCH:
      // console.log(action.payload);
      return {
        ...state,
        skills: action.payload,
      };
    default:
      return state;
  }
}
// const jobStore = createStore(jobReducer);
export default jobReducer;
