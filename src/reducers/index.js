// this is the root reducers , individual reducers would be invoked fomr here

import { combineReducers } from "redux";
import userDetails from "./userDetails";

export default combineReducers({
  userDetails
});
