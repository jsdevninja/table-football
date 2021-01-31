import { all, fork } from "redux-saga/effects";

import team from "./team";

export default function* rootSaga() {
  yield all([fork(team)]);
}
