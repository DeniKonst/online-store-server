import { createAction } from "typesafe-actions";
import { IAuthState } from "./reducer";

export const login = createAction("AUTH/LOGIN")<{email: string; password: string}>();
export const registration = createAction("AUTH/REGISTRATION")<{email: string; password: string}>();
