import React from "react";
import styles from "./styles.module.css";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { UserAvatar } from "../userAvatar/userAvatar";

interface ILogaut {
  logout: () => void;
}

export const NavDropDown = ({ logout }: ILogaut) => {
  const menu = (
    <Menu>
      <Menu.Item key={1} onClick={logout}>
        Logout
      </Menu.Item>
      <Menu.Item key={2} onClick={() => alert("no setting")}>
        Settings
      </Menu.Item>
      <Menu.Item key={3} onClick={() => alert("basket is empty")}>
        Basket
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown trigger={["click"]} overlay={menu}>
      <div className={styles.authUser}>
        <div className={styles.userAvatar}>
          <UserAvatar width={30} height={30} />
        </div>
        <DownOutlined className={styles.icon} />
      </div>
    </Dropdown>
  );
};
