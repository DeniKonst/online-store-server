import React, { useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import { Product } from "./components";
import { selectAutoProducts } from "../../redux/Auto/selectors";

export const AutoPage = () => {
  const products = useSelector(selectAutoProducts);
console.log('products: ', )
  const renderProducts = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div>
      <h1 className={styles.pageName}> AUTO </h1>
      <div className={styles.container}>{renderProducts}</div>
    </div>
  );
};

export default AutoPage;
