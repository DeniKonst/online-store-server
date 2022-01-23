import { all } from "redux-saga/effects";
import { autchSagaWatcher } from "./auth/sagas";

export default function* rootSaga() {
  yield all([autchSagaWatcher()]);
}
