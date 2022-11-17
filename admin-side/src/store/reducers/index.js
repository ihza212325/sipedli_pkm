import { combineReducers } from "redux";
import companyReducer from "./company";
import jobReducer from "./job";
const rootReducer = combineReducers({
  jobs: jobReducer,
  company: companyReducer,
});
// console.log(rootReducer);
export default rootReducer;
