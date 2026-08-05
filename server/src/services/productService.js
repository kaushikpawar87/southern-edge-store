import { products } from "../data/products.js";
import { pool } from "../config/database.js";

export async function getAllProducts() {
  const result = await pool.query(`

    SELECT

      id,

      name,

      brand,

      price,

      description,

      image_url,

      stock_quantity,

      is_active,

      created_at,

      updated_at

    FROM products

    ORDER BY id ASC

  `);

  // console.log(result.rows);

  return result.rows;
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
