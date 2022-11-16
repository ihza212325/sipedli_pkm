import { combineReducers } from "redux";
import jobReducer from "./job";

const rootReducer = combineReducers({
  jobs: jobReducer,
});
// console.log(rootReducer);
export default rootReducer;
