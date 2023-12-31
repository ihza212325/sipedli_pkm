import { ERROR_MESSAGE, JOB_DETAIL, JOB_FETCH, LOADING } from "../actionType";
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
  console.log("anjay");
  console.log(action.type);
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case JOB_FETCH:
      return {
        ...state,
        jobs: action.payload,
      };
    case JOB_DETAIL:
      return {
        ...state,
        job: action.payload,
        company: action.payload.Company,
        skills: action.payload.Skills,
      };
    default:
      return state;
  }
}
// const jobStore = createSt ore(jobReducer);
export default jobReducer;
