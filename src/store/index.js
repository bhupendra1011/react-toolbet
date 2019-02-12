import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";
import reducer from "../reducers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
