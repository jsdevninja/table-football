import { put, call, takeLatest, all } from "redux-saga/effects";
import api from "src/utils/api";
import actions from "../actions";
import { GET_TEAMS_REQUEST } from "../actions/types";

function* getTeams(action) {
  // yield put(coreActions.toggleLoading('Loading...'))
  try {
    const { data } = yield call(api.get, `/teams`);
    yield put(actions.teamActions.getTeamsSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actions.teamActions.getTeamsFail(error));
  }
  // yield put(actions.toggleLoading(""));
}

export default function* teamSaga() {
  yield all([takeLatest(GET_TEAMS_REQUEST, getTeams)]);
}
