import { IProduct } from "./types";
import { createAction } from "typesafe-actions";

export const getProductsSuccess = createAction("AUTO/GET_PRODUCTS_SUCCESS")<
  IProduct[]
>();
