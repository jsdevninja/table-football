import {
  GET_STATISTICS_REQUEST,
  GET_STATISTICS_SUCCESS,
  GET_STATISTICS_FAIL,
  RECORD_SCORE_REQUEST,
  RECORD_SCORE_SUCCESS,
  GET_TEAM_STATISTICS_REQUEST,
  GET_TEAM_STATISTICS_SUCCESS,
  GET_TEAMTEAM_STATISTICS_REQUEST,
  GET_TEAMTEAM_STATISTICS_SUCCESS,
  CLEAR_SCORE_STORE,
  UPDATE_SCORE_REQUEST,
  UPDATE_SCORE_SUCCESS,
} from "./types";

export const getStatisticsRequest = () => ({
  type: GET_STATISTICS_REQUEST,
});

export const getStatisticsSuccess = (payload) => ({
  type: GET_STATISTICS_SUCCESS,
  payload,
});

export const getStatisticsFail = (payload) => ({
  type: GET_STATISTICS_FAIL,
  payload,
});

export const recordScoreRequest = (payload) => ({
  type: RECORD_SCORE_REQUEST,
  payload,
});

export const recordScoreSuccess = (payload) => ({
  type: RECORD_SCORE_SUCCESS,
  payload,
});

export const getTeamStatisticsRequest = (teamId) => ({
  type: GET_TEAM_STATISTICS_REQUEST,
  payload: { teamId },
});

export const getTeamStatisticsSuccess = (payload) => ({
  type: GET_TEAM_STATISTICS_SUCCESS,
  payload,
});

export const getTeamTeamStatisticsRequest = (payload) => ({
  type: GET_TEAMTEAM_STATISTICS_REQUEST,
  payload,
});

export const getTeamTeamStatisticsSuccess = (payload) => ({
  type: GET_TEAMTEAM_STATISTICS_SUCCESS,
  payload,
});

export const updateScoreRequest = (payload) => ({
  type: UPDATE_SCORE_REQUEST,
  payload,
});

export const updateScoreSuccess = (payload) => ({
  type: UPDATE_SCORE_SUCCESS,
  payload,
});

export const clearStore = () => ({
  type: CLEAR_SCORE_STORE,
});
