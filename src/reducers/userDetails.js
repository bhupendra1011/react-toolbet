import { FETCH_USER_DETAILS } from "../actions/type";

const reducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_DETAILS:
      return {
        ...{
          ...action.payload.data,
          isLoading: false
        }
      };
    default:
      return state;
  }
};

export default reducer;
