import React from "react";
import { IProduct } from "../../../../redux/Auto/types";

import styles from "./styles.module.css";

interface IProductProps {
  product: IProduct;
}

export const Product = (props: IProductProps) => {
  const { product } = props;
  const { name, description, cost, weight, imageSrc } = product;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${imageSrc})` }}
          >
            <div className={styles.showButton}> V </div>
          </div>
          <p className={styles.itemName}> {name} </p>
          <div>
            <p className={styles.description}> {description} </p>
          </div>
          <div className={styles.itemFooter}>
            <div className={styles.price}>
              <p className={styles.cost}> {cost} руб. </p>
              <p className={styles.weight}> {weight} кг. </p>
            </div>
            <button className={styles.cart}> В корзину </button>
          </div>
        </div>
      </div>
    </>
  );
};
