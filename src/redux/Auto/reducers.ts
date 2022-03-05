import { IProduct } from "./types";
import { products } from "./mockData";
import { ActionType, createReducer } from "typesafe-actions";
import * as autoActions from "./actions";

export interface IAutoState {
  data: IProduct[];
  isLoading: boolean;
  isError: boolean;
}

export const initialState: IAutoState = {
  data: products,
  isLoading: false,
  isError: false,
};

type AutoActions = ActionType<typeof autoActions>;

export const autoReducer = createReducer<IAutoState, AutoActions>(
  initialState
).handleAction(autoActions.getProductsSuccess, (state, { payload }) => {
  return { ...state, data: payload };
});
