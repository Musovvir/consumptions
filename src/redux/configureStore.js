import { createLogger } from "redux-logger/src";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { categories } from "./reducers/categories";

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const preloadedState = JSON.parse(localStorage.getItem("categories"));

const rootReducer = combineReducers({ categories });
export const store = createStore(
  rootReducer,
  preloadedState ? preloadedState : undefined,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  localStorage.setItem("categories", JSON.stringify(store.getState()));
});
