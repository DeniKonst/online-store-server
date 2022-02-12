import { all, put, call, takeEvery } from "redux-saga/effects";
import { getType } from "typesafe-actions";

import * as authActions from "./actions";
import { storageName } from "./constants";
import * as requests from "./requests";

function* loginSagaWorker({
  payload,
}: ReturnType<typeof authActions.login>): any {
  try {
    const response = yield call(requests.login, payload);
    console.log();

    localStorage.setItem(storageName, JSON.stringify(response.data));
    yield put(authActions.loginSuccess(response.data));
  } catch (error) {
    console.error({ error });
  }
}

function* loginSagaWother() {
  yield takeEvery(getType(authActions.login), loginSagaWorker);
}

function* registrSagaWorker({
  payload,
  meta: navigate
}: ReturnType<typeof authActions.registr>): any {
  
  try {
    const response = yield call(requests.registration, payload);
    console.log();

    localStorage.setItem(storageName, JSON.stringify(response.data));

    yield put(authActions.registrSuccess(response.data));
    navigate('/login')

  } catch (error) {
    console.error({ error });
  }
}

function* registrSagaWother() {
  yield takeEvery(getType(authActions.registr), registrSagaWorker);
}

function* logAutSagaWorker() {
  localStorage.removeItem(storageName);
}

function* logAutSagaWother() {
  yield takeEvery(getType(authActions.logout), logAutSagaWorker);
}

export function* autchSagaWatcher() {
  yield all([loginSagaWother(), logAutSagaWother(), registrSagaWother()]);
}

