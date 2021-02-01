import { put, call, takeLatest, all } from "redux-saga/effects";
import api from "src/utils/api";
import actions from "../actions";
import { GET_TEAMS_REQUEST, CREATE_TEAM_REQUEST } from "../actions/types";

function* getTeams(action) {
  try {
    const { data } = yield call(api.get, "/teams");
    yield put(actions.teamActions.getTeamsSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actions.teamActions.getTeamsFail(error));
  }
}

function* createTeam(action) {
  try {
    const { name, info } = action.payload;
    const { data } = yield call(api.post, "/teams", { name, info });
    yield put(actions.teamActions.createTeamSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
export default function* teamSaga() {
  yield all([takeLatest(GET_TEAMS_REQUEST, getTeams)]);
  yield all([takeLatest(CREATE_TEAM_REQUEST, createTeam)]);
}
