import React from "react";
import styles from "./styles.module.css";
import { Spin } from "antd";

interface spinnerProps {
  isLoading: boolean
}

const Spiner = ({isLoading}: spinnerProps) => {
  if (isLoading == true) {
    return (
      <div className={styles.spin}>
        <Spin />
      </div>
    );
  }
  else return null
};
export default Spiner;
