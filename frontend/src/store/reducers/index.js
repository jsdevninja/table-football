import { combineReducers } from "redux";

import team from "./team";
import score from "./score";
import global from "./global";

export default combineReducers({
  team,
  score,
  global,
});
