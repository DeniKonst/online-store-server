import { ActionType, createReducer } from "typesafe-actions";
import * as authActions from "./actions";

export interface IAuthState {
  isAuthetificated: boolean;
  userId: string | null;
  login: string | null;
  token: string | null;
  isError: boolean;
}

export const initialState: IAuthState = {
  isAuthetificated: false,
  userId: null,
  login: null,
  token: null,
  isError: false,
};

type AuthActions = ActionType<typeof authActions>;

export const authReducer = createReducer<IAuthState, AuthActions>(initialState)
  .handleAction(
    authActions.loginSuccess,
    (state, { payload: { login, token, _id } }) => {
      return {
        ...state,
        login,
        isAuthetificated: Boolean(token),
        // isAuthetificated: true,
        token,
        userId: _id,
      };
    }
  )
  .handleAction(
    authActions.registrSuccess,
    (state, { payload: { login, token, _id } }) => {
      return {
        ...state,
        login,
        isAuthetificated: Boolean(token),
        token,
        userId: _id,
      };
    }
  )

  .handleAction(authActions.loginError, (state) => {
    return {
      ...state,
      isError: false,
      isLoading: false,
    };
  })
  .handleAction(authActions.logAutSuccess, (state) => {
    return {
      ...state,
      isAuthetificated: false,
    };
  });
