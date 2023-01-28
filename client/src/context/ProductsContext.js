import { createContext, useReducer } from "react";

export const ProductsContext = createContext();

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: action.payload,
      };
    case "CREATE_PRODUCT":
      return {
        products: [action.payload, ...state.products],
      };
    case "DELETE_PRODUCT":
      return {
        products: state.products.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};
