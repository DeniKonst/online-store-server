import React from "react";
import styles from "./styles.module.css";
import { DollarCircleOutlined } from "@ant-design/icons";
import { Route, NavLink, Routes } from "react-router-dom";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import News from "../../pages/news/news";
import Resipec from "../../pages/resipec/resipec";
import Shop from "../../pages/shop/shop";
import OurStory from "../../pages/ourStory/OurStory";

const App = () => {
  const activeRouteStyle = { color: "teal" };
  console.log('DEVELOPMENT_API_URL: ', process.env)
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
        <div className={styles.story}>
          <NavLink to="/our-story">Our story</NavLink>
        </div>
        <div className={styles.resipec}>
          <NavLink to="/resipec">Resipec</NavLink>
        </div>
        <div className={styles.news}>
          <NavLink to="/news">News</NavLink>
        </div>
        <div className={styles.login}>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
      <div className={styles.content}>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/resipec" element={<Resipec />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
