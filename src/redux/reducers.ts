import { combineReducers } from "redux";
import { authReducer, IAuthState } from "./auth/reducer";
import { autoReducer, IAutoState } from "./Auto/reducers";
import { dilogReduser, IDilogsState } from "./shareDilog/reducer";

export interface State {
  dilogReduser: IDilogsState,
  authReducer: IAuthState,
  autoReducer: IAutoState
}

const rootReducer = combineReducers<State>({dilogReduser, authReducer, autoReducer});

export default rootReducer;
