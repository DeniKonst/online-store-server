import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
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

// function* registrSagaWorker({
//   payload,
// }: ReturnType<typeof authActions.registr>): any {
//   try {
//     const response = yield call(requests.registration, payload);
//     console.log();

//     localStorage.setItem(storageName, JSON.stringify(response.data));
//     yield put(authActions.registrSuccess(response.data));
//   } catch (error) {
//     console.error({ error });
//   }
// }

// function* registrSagaWother() {
//   yield takeEvery(getType(authActions.registr), registrSagaWorker);
// }

function* logAutSagaWorker() {
  yield setTimeout((dispatch: Dispatch) => {
    dispatch(authActions.logAutSuccess());

    localStorage.removeItem(storageName);
  }, 300);
}

function* logAutSagaWother() {
  yield takeEvery(getType(authActions.logAutSuccess), logAutSagaWorker);
}

export function* autchSagaWatcher() {
  yield all([loginSagaWother(), logAutSagaWother()]);
}
