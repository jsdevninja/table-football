import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import sagas from "./sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = applyMiddleware(sagaMiddleware);
  const store = createStore(reducer, middleware);

  sagaMiddleware.run(sagas);
  return store;
}
