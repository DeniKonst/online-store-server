import { combineReducers } from "redux";
import { authReducer, IAuthState } from "./auth/reducer";
import { dilogReduser, IDilogsState } from "./shareDilog/reducer";

export interface State {
  dilogReduser: IDilogsState,
  authReducer: IAuthState
}

const rootReducer = combineReducers<State>({dilogReduser, authReducer});

export default rootReducer;
