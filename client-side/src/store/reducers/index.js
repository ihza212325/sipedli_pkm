import { combineReducers } from "redux";
import jobReducer from "./job";
import loginRegisterReducer from "./LoginRegister";
import quizReducer from "./quiz";

const rootReducer = combineReducers({
  jobs: jobReducer,
  quiz: quizReducer,
  loginRegister: loginRegisterReducer,
});
// console.log(rootReducer);
export default rootReducer;
