import { createStore, combineReducers } from "redux";
import { getWeeklyForecast, getCurrentCity } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  weeklyInfo: getWeeklyForecast,
  city: getCurrentCity,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
