import { Button } from "antd";
import React from "react";
import Spiner from "../../components/spinner/spiner";
import styles from "./styles.module.css";
import { Spin } from "antd";
import { useState } from "react";

const HomePage = () => {
  const [isLoading, setIsloading] = useState(false);
  const hendleStartSpiner = () => {
    if (isLoading === isLoading) return setIsloading(true);
  };

  const hendleStopSpiner = () => {
    return setIsloading(false);
  };

  return (
    <div className={styles.home}>
      <div className={styles.button}>
        <Button onClick={hendleStartSpiner}> start </Button>
        <Button onClick={hendleStopSpiner}> stop </Button>
      </div>
      <div className={styles.loading}>
        <Spiner isLoading={isLoading} />
      </div>
    </div>
  );
};

export default HomePage;
