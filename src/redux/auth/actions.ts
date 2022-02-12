import { createAction } from "typesafe-actions";
import { IAuthState } from "./reducer";
import { ILogin, ILoginResponse, IRegistr, IregistrResponse } from "./types";

export const login = createAction("AUTH/LOGIN")<ILogin>();

export const loginSuccess = createAction("AUTH/LOGIN_SUCCES")<ILoginResponse>();

export const logAutSuccess = createAction("AUTH/LOGAUT_SUCCES")();

export const loginError = createAction("AUTH/LOGIN_ERROR")();

export const isLoading = createAction("AUTH/ISLOADING")<boolean>();

export const registr = createAction("AUTH/REGISTR")<IRegistr>();

export const registrSuccess = createAction("AUTH/REGISTR_SUCCES")<IregistrResponse>();
