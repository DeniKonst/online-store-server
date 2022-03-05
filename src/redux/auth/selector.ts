// export const variable = 'dsdsd';

import { State } from "../reducers";

export const selectIsAuthetificated = (state: State) => state.authReducer.isAuthetificated;
export const selectUserLogin = (state: State) => state.authReducer.login;