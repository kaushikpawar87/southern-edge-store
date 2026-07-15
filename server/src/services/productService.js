import { products } from "../data/products.js";

export function getAllProducts() {
  return products;
}

export function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

export function getProductByBrand(brand) {
  return products.filter((product) => product.brand === brand);
}
