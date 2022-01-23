import { createStore, applyMiddleware, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas';

const logger = createLogger({
  collapsed: true,
  duration: false,
  timestamp: true,
});

const sagaMiddleware = createSagaMiddleware();

const middlewareList: Middleware[] = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewareList.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewareList))
);

sagaMiddleware.run(rootSaga)

export default store;
