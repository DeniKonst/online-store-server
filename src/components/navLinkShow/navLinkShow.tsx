import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavDropDown } from "../navDropDown/navDropDown";
import styles from "./styles.module.css";

interface ILinkShow {
  isAuthetificated: boolean;
  isLogaut: ()=>void
}

export const NavLinkShow = ({ isAuthetificated, isLogaut }: ILinkShow) =>
  isAuthetificated ? (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <NavLink to="/"> Home </NavLink>
      </div>
      <div className={styles.shop}>
        <NavLink to="/shop">Shop</NavLink>
      </div>
      <div className={styles.story}></div>
      <div className={styles.resipec}>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className={styles.news}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={styles.drop}>
        <NavLink to="/drop"> <NavDropDown isLogaut={isLogaut} /> </NavLink>
      </div>
    </nav>
  ) : (
    <nav className={styles.nav}>
      <div className={styles.login}>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className={styles.login}>
        <NavLink to="/registration">Registration</NavLink>
      </div>
    </nav>
  );
