import { products } from "../data/products.js";

export function getAllProducts({ brand, search }) {
  let filteredProducts = [...products];

  if (brand) {
    filteredProducts = filteredProducts.filter(
      (product) => product.brand.toLowerCase() === brand.toLowerCase(),
    );
  }

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return filteredProducts;
}

export function getProductById(productId) {
  return products.find((product) => product.id === productId);
}
