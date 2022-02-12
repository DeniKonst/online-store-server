import React from "react";
import styles from "./styles.module.css";

import { Menu, Dropdown } from "antd";
import { DownOutlined, QqOutlined } from "@ant-design/icons";

interface ILogaut {
  isLogaut: ()=> void
}

export const NavDropDown = ({isLogaut}:ILogaut) => {
  const menu = (
    <Menu>
      <Menu.Item key={1}>UserName</Menu.Item>
      <Menu.Item key={2} onClick={isLogaut}>LogAut</Menu.Item>
      <Menu.Item key={3}>Setting</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu}>
        <div className={styles.icon}>
        <QqOutlined />  <DownOutlined />
        </div>
      </Dropdown>
    </div>
  )
};
