import { put, call, takeLatest, all } from "redux-saga/effects";
import api from "src/utils/api";
import actions from "../actions";
import {
  GET_STATISTICS_REQUEST,
  RECORD_SCORE_REQUEST,
  GET_TEAM_STATISTICS_REQUEST,
  GET_TEAMTEAM_STATISTICS_REQUEST,
  UPDATE_SCORE_REQUEST,
} from "../actions/types";

function* getStatistics(action) {
  yield put(actions.globalActions.toggleLoading(true));
  try {
    const { data } = yield call(api.get, "/scores");
    yield put(actions.scoreActions.getStatisticsSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actions.scoreActions.getStatisticsFail(error));
  }
  yield put(actions.globalActions.toggleLoading(false));
}

function* recordScore(action) {
  yield put(actions.globalActions.toggleLoading(true));
  try {
    const { score1, score2, team1, team2 } = action.payload;

    const { data } = yield call(api.post, "/scores", {
      score1,
      score2,
      homeTeamId: team1,
      awayTeamId: team2,
    });
    yield put(actions.scoreActions.recordScoreSuccess(data));
  } catch (error) {
    console.log(error);
  }
  yield put(actions.globalActions.toggleLoading(false));
}

function* getTeamStatistics(action) {
  yield put(actions.globalActions.toggleLoading(true));
  try {
    const { data } = yield call(api.get, `/scores/${action.payload.teamId}`);
    yield put(actions.scoreActions.getTeamStatisticsSuccess(data));
  } catch (error) {
    console.log(error);
  }
  yield put(actions.globalActions.toggleLoading(false));
}

function* getTeamTeamStatistics(action) {
  yield put(actions.globalActions.toggleLoading(true));
  try {
    const { team1, team2 } = action.payload;
    const { data } = yield call(api.get, `/scores/${team1}/${team2}`);
    yield put(actions.scoreActions.getTeamTeamStatisticsSuccess(data));
  } catch (error) {
    console.log(error);
  }
  yield put(actions.globalActions.toggleLoading(false));
}

function* updateScore(action) {
  yield put(actions.globalActions.toggleLoading(true));
  try {
    const { scoreId, score1, score2 } = action.payload;

    const { data } = yield call(api.put, `/scores/${scoreId}`, {
      score1,
      score2,
    });
    yield put(actions.scoreActions.updateScoreSuccess(data));
  } catch (error) {
    console.log(error);
  }
  yield put(actions.globalActions.toggleLoading(false));
}

export default function* scoreSaga() {
  yield all([takeLatest(GET_STATISTICS_REQUEST, getStatistics)]);
  yield all([takeLatest(RECORD_SCORE_REQUEST, recordScore)]);
  yield all([takeLatest(GET_TEAM_STATISTICS_REQUEST, getTeamStatistics)]);
  yield all([
    takeLatest(GET_TEAMTEAM_STATISTICS_REQUEST, getTeamTeamStatistics),
  ]);
  yield all([takeLatest(UPDATE_SCORE_REQUEST, updateScore)]);
}
