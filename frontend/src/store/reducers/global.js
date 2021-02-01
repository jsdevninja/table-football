import { TOGGLE_LOADING } from "../actions/types";

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
};

export default reducer;
