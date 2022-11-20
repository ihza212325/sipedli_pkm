import { combineReducers } from "redux";
import companyReducer from "./company";
import jobReducer from "./job";
import loginRegisterReducer from "./LoginRegister";
const rootReducer = combineReducers({
  jobs: jobReducer,
  company: companyReducer,
  loginRegister: loginRegisterReducer,
});
// console.log(rootReducer);
export default rootReducer;
