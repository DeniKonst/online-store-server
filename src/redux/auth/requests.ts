import baseAxiosInstance from "../../api/api";

export const login = (payload: {email: string; password: string}) =>
  baseAxiosInstance.post("/api/auth/login", payload);

export const registration = (payload: {email: string; password: string}) =>
  baseAxiosInstance.post("/api/auth/register", payload);
