import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares/logger";
import rootReducer from "./reducers";

const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducer, middlewares);
export default store;
