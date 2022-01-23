import { createAction } from "typesafe-actions";
import { IShowDilogPayload } from "./reducer";


export const showDilog = createAction('SHARE_DILOG/SHOW_DILOG')<IShowDilogPayload>();