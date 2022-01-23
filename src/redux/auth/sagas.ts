import { all, put, call, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import * as authActions from "./actions";
import * as requests from "./requests";

function* loginSagaWorker({ payload }: ReturnType<typeof authActions.login>): any {
  try {
    const response = yield call(requests.login, payload);
  } catch (error) {
    console.error({ error });
  }
}

function* loginSagaWother() {
  yield takeEvery(getType(authActions.login), loginSagaWorker);
}

export function* autchSagaWatcher() {
  yield all([loginSagaWother()]);
}
