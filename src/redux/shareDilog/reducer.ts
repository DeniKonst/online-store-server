import { ActionType, createReducer } from "typesafe-actions";
import * as dilogActions from "./action";


export interface IDilog {
  id: string;
  name: string;
  isShowing: boolean;
}

export interface IShowDilogPayload extends Omit<IDilog, "isShowing"> {}

export interface IDilogs {
 [id: string]: IDilog
}

export interface IDilogsState {
  dilogs: IDilogs
}

const initialState:IDilogsState = {
  dilogs: {}
}

type DilogActions = ActionType<typeof dilogActions>;


export const dilogReduser = createReducer<IDilogsState, DilogActions>(
  initialState
)
  .handleAction(dilogActions.showDilog, (state, { payload }) => {
    return {
      ...state,
      dilogs: {
        ...state.dilogs,
        [payload.id]: { ...payload, isShowing: true },
      },
    };
  })