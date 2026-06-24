import { useContext } from "react";
import ProductContext from "../ProductsContext";

export function useProducts() {
  return useContext(ProductContext);
}
