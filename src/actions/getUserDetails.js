// this will create an action object  { type , payload} for the reducers
// any middleware like redux-thunk or redux-promise should also be defined here and then dispatch proper action object to root reducer

import axios from "axios";
import { FETCH_USER_DETAILS } from "./type";

export default function getUserDetails() {
  // below function is called a thunk
  /*return function(dispatch, getState) {
    axios.get("https://api.myjson.com/bins/e9gfs").then(respose => {
      // an action needs to be formed with the response of the resolved promise
      dispatch(setUserDetails(respose.data));
    });
  }; */
  return {
    type: FETCH_USER_DETAILS,
    payload: axios.get("https://api.myjson.com/bins/e9gfs")
  };
}

/*
const setUserDetails = data => ({
  type: FETCH_USER_DETAILS,
  payload: data
});
*/
