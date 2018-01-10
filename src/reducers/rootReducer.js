import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { spots } from "./reducers";
import sessionReducer from "./sessionReducer";

export const root = combineReducers({
  spots,
  sessionReducer,
  router: routerReducer
});
