import { CartContext } from "../CartContext.js";
import { useContext } from "react";

export function useCart() {
  return useContext(CartContext);
}
