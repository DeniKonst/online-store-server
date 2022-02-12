import { ILogin } from './types';
import baseAxiosInstance from "../../api/api";

export const login = (payload: ILogin) =>
  baseAxiosInstance.post<Promise<any>>("/api/auth/login", payload);

export const registration = (payload: {email: string; password: string}) =>
  baseAxiosInstance.post("/api/auth/register", payload);
