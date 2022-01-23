import Link from "antd/lib/typography/Link";
import React from "react";
import { useState } from "react";
import { Entry } from "../../components/entry/entry";
import styles from "./login.styles.module.css";

const Login = () => {
  const [isShowEntry, setIsShowEntry] = useState(false);
  const handleShowModal = () => {
    if (isShowEntry === isShowEntry) {
      return setIsShowEntry(true);
    }
  };

  return (
    <div className={styles.login} onClick={handleShowModal}>
      <Link>Вход</Link> / <Link>Регистрация</Link>
      <div>
        <Entry isShowEntry={isShowEntry} />
      </div>
    </div>
  );
};

export default Login;
