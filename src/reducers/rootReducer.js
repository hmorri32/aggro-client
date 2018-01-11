import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { spots, spotsWithForecast } from "./reducers";
import sessionReducer from "./sessionReducer";

export const root = combineReducers({
  spots,
  spotsWithForecast,
  sessionReducer,
  router: routerReducer
});
