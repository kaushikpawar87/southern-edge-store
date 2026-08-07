import { products } from "../data/products.js";
import { pool } from "../config/database.js";

export async function getAllProducts() {
  const result = await pool.query(
    `SELECT
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

  `,
  );

  console.log(result.rows);

  return result.rows[0];
}

export async function getProductById(productId) {
  const result = await pool.query(
    `SELECT 
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
    WHERE id = $1
    `,
    [productId],
  );
  return result.rows;
}

export async function createNewProduct(productData) {
  const { name, brand, price, description, image } = productData;

  const result = pool.query(
    `
  INSERT INTO products (
  name, 
  brand,
  price,
  description, 
  image_url
  )
  VALUES ($1, $2, $3, $4, $5)
  RETURNING 
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
  `,
    [name, brand, price, description, image],
  );
  return result.rows[0];
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
