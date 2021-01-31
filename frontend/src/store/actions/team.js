import { GET_TEAMS_REQUEST, GET_TEAMS_SUCCESS, GET_TEAMS_FAIL } from "./types";

export const getTeamsRequest = () => ({
  type: GET_TEAMS_REQUEST,
});

export const getTeamsSuccess = (payload) => ({
  type: GET_TEAMS_SUCCESS,
  payload,
});

export const getTeamsFail = (payload) => ({
  type: GET_TEAMS_FAIL,
  payload,
});
