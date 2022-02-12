import { login } from "./requests";
export interface ILogin {
  email: string | null;
  password: string | null;
}

export interface ILoginResponse {
  login: string;
  token: string | null;
  _id: string | null;
  password: string;
}

export interface IRegistr {
  email: string | null;
  login: string;
  password: string | null;
}

export interface IregistrResponse {
  login: string;
  token: string | null;
  _id: string | null;
  password: string;
}
