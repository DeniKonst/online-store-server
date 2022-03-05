import { UserAddOutlined } from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import { NavDropDown } from "../navDropDown/navDropDown";
import { UserAvatar } from "../userAvatar/userAvatar";
import styles from "./styles.module.css";
import { Order } from "../Order/Order";


interface IHeader {
  isAuthetificated: boolean;
  userLogin: string | null;
  logout: () => void;
}

export const Header = ({ isAuthetificated, logout, userLogin }: IHeader) => (
  <header className={styles.header}>
    <nav className={cn(styles.nav, { [styles.startPage]: !isAuthetificated })}>
      {isAuthetificated ? (
        <>
          <div className={styles.home}>
            <NavLink to="/"> Auto </NavLink>
          </div>
          <div className={styles.shop}>
            <NavLink to="/moto">Moto</NavLink>
          </div>
          <div className={styles.about}>
            <NavLink to="/velo">Velo</NavLink>
          </div>
          <div className={styles.news}>
            <NavLink to="/news">News</NavLink>
          </div>
          <div className={styles.orders}>
            <Order />
          </div>
          <div className={styles.user}>
            <span>{userLogin}</span>
            <NavDropDown logout={logout} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.login}>
            <NavLink to="/login">Login</NavLink>
          </div>
          <div className={styles.login}>
            <NavLink to="/registration">Registration</NavLink>
          </div>
        </>
      )}
    </nav>
  </header>
);
