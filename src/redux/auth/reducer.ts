import { ActionType, createReducer } from "typesafe-actions";
import * as authActions from "./actions";

export interface IAuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
}

export const initialState: IAuthState = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

type AuthActions = ActionType<typeof authActions>;

// export const authReducer = createReducer<IAuthState, AuthActions>(
//   initialState
// ).handleAction(authActions.loginStart, (state, { payload }) => {
//   return {
//     ...state,
    
//   };
// });
