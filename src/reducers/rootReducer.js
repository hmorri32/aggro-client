import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { spots } from "./reducers";

export const root = combineReducers({
  spots,
  router: routerReducer
});
