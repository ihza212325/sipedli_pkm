import { ERROR_MESSAGE, QUIZ_FETCH, LOADING, SCORE_FETCH } from "../actionType";
// import { logger } from "./middlewares/logger";
const initialState = {
  loading: false,
  error: null,
  quiz: [],
  user: [],
  job: {},
  company: {},
  skills: [],
  score: [],
};

function quizReducer(state = initialState, action) {
  console.log("anjay quiz");
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
    case QUIZ_FETCH:
      return {
        ...state,
        quiz: action.payload,
      };
    case SCORE_FETCH:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
}
// const jobStore = createSt ore(quizReducer);
export default quizReducer;
