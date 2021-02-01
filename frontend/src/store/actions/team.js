import {
  GET_TEAMS_REQUEST,
  GET_TEAMS_SUCCESS,
  GET_TEAMS_FAIL,
  CREATE_TEAM_REQUEST,
  CREATE_TEAM_SUCCESS,
} from "./types";

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

export const createTeamRequest = (payload) => ({
  type: CREATE_TEAM_REQUEST,
  payload,
});

export const createTeamSuccess = (payload) => ({
  type: CREATE_TEAM_SUCCESS,
  payload,
});
