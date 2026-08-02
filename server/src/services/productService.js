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
  console.log("Searching for ID:", productId);

  console.log("Searching ID type:", typeof productId);

  console.log(
    "Available product IDs:",

    products.map((product) => ({
      id: product.id,

      type: typeof product.id,
    })),
  );
  return products.find((product) => product.id === productId);
}

export function createNewProduct(productData) {
  const newProduct = {
    id: Date.now(),
    ...productData,
  };
  products.push(newProduct);

  return newProduct;
}

export function updateProductById(id, productData) {
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return null;
  }

  const updatedProduct = {
    id,
    ...productData,
  };

  products[productIndex] = updatedProduct;

  return updatedProduct;
}

export function deleteProductById(id) {
  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return null;
  }

  const deletedProduct = products[productIndex];

  products.splice(productIndex, 1);

  return deletedProduct;
}
