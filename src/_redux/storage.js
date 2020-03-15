import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "../middleware";
import GlobalData from "../_reducers/globalData";

const rootReducers = combineReducers({ GlobalData });
const store = createStore(rootReducers, applyMiddleware(promise, logger));
export default store;
