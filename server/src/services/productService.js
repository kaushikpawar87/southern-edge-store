import { products } from "../data/products.js";

export function getAllProducts({ brand, search, sort, page = 1, limit = 10 }) {
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

  if (sort === "price") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "-price") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return {
    products: paginatedProducts,
    pagination: {
      currentPage: pageNumber,
      limit: limitNumber,
      totalProducts: filteredProducts.length,
      totalPages: Math.ceil(filteredProducts.length / limitNumber),
    },
  };
}

export function getProductById(productId) {
  return products.find((product) => product.id === productId);
}
