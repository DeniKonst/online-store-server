import { IAuthState } from "./../redux/auth/reducer";
import { Context, createContext } from "react";

function noop(jwtToken: any, id: any) {}

interface IAuthContext {
  token: string;
  userId: string;
  login: (jwtToken: any, id: any) => void;
  logaut: () => void;
  isAuthetificated: boolean;
}

export const AuthContext = createContext({
  token: '',
  userId: '',
  login: noop,
  logaut: noop,
  isAuthetificated: false,
});
