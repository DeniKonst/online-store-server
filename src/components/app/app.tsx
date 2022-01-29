import React from "react";
import { DollarCircleOutlined } from "@ant-design/icons";
import { NavLink, Routes } from "react-router-dom";

import { useRoutes } from "../../routes";
import styles from "./styles.module.css";
import { useAuth } from "../../hooks/auth.hook";
import { AuthContext } from "../../context/authContext";

const App = () => {
  const { login, logaut, token, userId } = useAuth();
  const isAuthetificated = !!token;
  const routes = useRoutes(isAuthetificated);

  const activeRouteStyle = { color: "teal" };
  console.log("DEVELOPMENT_API_URL: ", process.env);

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
      <nav className={styles.nav}>
        <div className={styles.home}>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className={styles.shop}>
          <NavLink to="/shop">Shop</NavLink>
        </div>
        <div className={styles.story}></div>
        <div className={styles.resipec}>
          <NavLink to="/resipec">Resipec</NavLink>
        </div>
        <div className={styles.news}>
          <NavLink to="/news">News</NavLink>
        </div>
        <div className={styles.login}>
          <NavLink to="/login">Login</NavLink>
        </div>
        <div className={styles.login}>
          <NavLink to="/registration">Registration</NavLink>
        </div>
      </nav>
      <AuthContext.Provider
        value={{ login, logaut, token, userId, isAuthetificated }}
      >
        <div className={styles.routes}>{routes}</div>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
