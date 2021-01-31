import { GET_TEAMS_SUCCESS, GET_TEAMS_FAIL } from "../actions/types";

const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAMS_SUCCESS:
      return { ...state, list: action.payload };
    case GET_TEAMS_FAIL:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
