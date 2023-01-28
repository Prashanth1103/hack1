import { useContext } from "react";

export const useProductsContext = () => {
  const { state, dispatch } = useContext(ProductsContext);

  if (!state) {
    return {
      products: [],
      dispatch,
    };
  }

  return { state, dispatch };
};
