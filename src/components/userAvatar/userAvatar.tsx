import React from 'react';
import { UserAddOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

interface IUserAvatar {
  height: number;
  width: number;
}

export const UserAvatar = ({ height, width }: IUserAvatar) => {
  return (
    <div style={{ width, height }} className={styles.container}>
      <UserAddOutlined />
    </div>
  );
};
