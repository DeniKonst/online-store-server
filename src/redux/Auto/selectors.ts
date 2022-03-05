import { State } from "../reducers";

export const selectAutoProducts = (state: State) => state.autoReducer.data;
