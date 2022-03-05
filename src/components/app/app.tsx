import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRoutes } from "../../routes";
import { loginSuccess, logout } from "../../redux/auth/actions";
import { storageName } from "../../redux/auth/constants";
import { ILoginResponse } from "../../redux/auth/types";
import {
  selectIsAuthetificated,
  selectUserLogin,
} from "../../redux/auth/selector";
import { Header } from "../Header/Header";
import styles from "./styles.module.css";

const App = () => {
  const dispatch = useDispatch();

  const isAuthetificated = useSelector(selectIsAuthetificated);
  const userLogin = useSelector(selectUserLogin);

  useEffect(() => {
    const userData = localStorage.getItem(storageName);
    if (userData) {
      const data: ILoginResponse | undefined = JSON.parse(userData);

      if (data?.token) {
        dispatch(loginSuccess(data));
      }
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  const routes = useRoutes(isAuthetificated);
  console.log(isAuthetificated);

  const activeRouteStyle = { color: "teal" };
  console.log("DEVELOPMENT_API_URL: ", process.env);
  // console.log("isAuthetificated: ", isAuthetificated);

  return (
    <div className={styles.app}>
      <Header
        isAuthetificated={isAuthetificated}
        logout={handleLogout}
        userLogin={userLogin}
      />

      {/* <AuthContext.Provider
        value={{ login, logaut, token, userId, isAuthetificated }}
      > */}
      <div className={styles.routes}>{routes}</div>
      {/* </AuthContext.Provider> */}
    </div>
  );
};

export default App;
