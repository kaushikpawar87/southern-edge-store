import { getAllProducts } from "../services/productService";

export function getProducts(req, res) {
  const products = getAllProducts();

  res.status(200).json(products);
}
