import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import React from "react";
import styles from "./styles.module.css";

export const Order = () => {
  return (
    <div className={styles.container}>
      
        <ShoppingCartOutlined className={styles.cart} />
        <Badge count={0} offset={[5, 5]} size="small" className={styles.bage}></Badge>
     
    </div>
  );
};
