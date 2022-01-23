import { State } from "../reducers";

export const selectDilog = (id: string) => (state: State) =>
  state.dilogReduser.dilogs[id];