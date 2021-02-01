import {
  GET_STATISTICS_SUCCESS,
  GET_STATISTICS_FAIL,
  RECORD_SCORE_SUCCESS,
  GET_TEAM_STATISTICS_SUCCESS,
  GET_TEAMTEAM_STATISTICS_SUCCESS,
  CLEAR_SCORE_STORE,
  UPDATE_SCORE_SUCCESS,
} from "../actions/types";

const initialState = {
  overall: [],
  team: null,
  teamteam: [],
  createdTeam: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATISTICS_SUCCESS:
      return { ...state, overall: action.payload };
    case RECORD_SCORE_SUCCESS:
    case UPDATE_SCORE_SUCCESS:
      return { ...state, createdTeam: action.payload };
    case GET_TEAM_STATISTICS_SUCCESS:
      return { ...state, team: action.payload };
    case GET_TEAMTEAM_STATISTICS_SUCCESS:
      return { ...state, teamteam: action.payload };
    case CLEAR_SCORE_STORE:
      return { ...state, team: null, teamteam: [], createdTeam: null };
    case GET_STATISTICS_FAIL:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
