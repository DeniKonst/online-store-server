import React from "react";
import { DollarCircleOutlined } from "@ant-design/icons";
import { NavLink, Routes } from "react-router-dom";

import { useRoutes } from "../../routes";
import styles from "./styles.module.css";
import { useAuth } from "../../hooks/auth.hook";
import { AuthContext } from "../../context/authContext";
import { NavLinkShow } from "../navLinkShow/navLinkShow";
import { Button } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { login, loginSuccess, logout } from "../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import { storageName } from "../../redux/auth/constants";
import { ILoginResponse } from "../../redux/auth/types";
import { selectIsAuthetificated } from "../../redux/auth/selector";

const App = () => {
  const dispatch = useDispatch();

  const isAuthetificated = useSelector(selectIsAuthetificated);

  useEffect(() => {
    const userData = localStorage.getItem(storageName);
    if (userData) {
      const data: ILoginResponse | undefined = JSON.parse(userData);

      if (data?.token) {
        dispatch(loginSuccess(data));
      }
    }
  }, []);

  const handleLogAut = () => {
    dispatch(logout());
  };

  const routes = useRoutes(isAuthetificated);
  console.log(isAuthetificated);

  const activeRouteStyle = { color: "teal" };
  console.log("DEVELOPMENT_API_URL: ", process.env);
  // console.log("isAuthetificated: ", isAuthetificated);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.call}>
          <DollarCircleOutlined />
        </div>
        <div className={styles.name}>name</div>
        <div className={styles.currency}>
          <DollarCircleOutlined />
          <span> currency </span>
        </div>
      </header>

      <NavLinkShow
        isAuthetificated={isAuthetificated}
        isLogaut={handleLogAut}
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
