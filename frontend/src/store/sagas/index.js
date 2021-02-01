import { all, fork } from "redux-saga/effects";

import team from "./team";
import score from "./score";

export default function* rootSaga() {
  yield all([fork(team)]);
  yield all([fork(score)]);
}
