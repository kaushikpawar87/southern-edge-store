import { pool } from "../config/database.js";

export async function getAllProducts({
  brand,
  search,
  sort,
  page = 1,
  limit = 5,
}) {
  let query = `
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
`;

  const values = [];
  const conditions = [];

  const pageNumber = Number(page);
  const limitNumber = Number(limit);

  const offset = (pageNumber - 1) * limitNumber;

  if (brand) {
    values.push(brand);
    conditions.push(`LOWER(brand) = LOWER($${values.length})`);
  }

  if (search) {
    values.push(`%${search}%`);
    conditions.push(`name ILIKE $${values.length}`);
  }

  if (conditions.length > 0) {
    query += ` WHERE ${conditions.join(" AND ")}`;
  }

  if (sort === "price") {
    query += ` ORDER BY price ASC`;
  } else if (sort === "-price") {
    query += ` ORDER BY price DESC`;
  }
  const filterValues = [...values];

  values.push(limitNumber);
  query += ` LIMIT $${values.length}`;

  values.push(offset);
  query += ` OFFSET $${values.length}`;

  const result = await pool.query(query, values);

  let countQuery = `
  SELECT COUNT(*)
  FROM products
  `;
  if (conditions.length > 0) {
    countQuery += ` WHERE ${conditions.join(" AND ")}`;
  }

  const countResult = await pool.query(countQuery, filterValues);

  const totalProducts = Number(countResult.rows[0].count);

  const totalPages = Math.ceil(totalProducts / limitNumber);

  return {
    products: result.rows,
    pagination: {
      currentPage: pageNumber,
      limit: limitNumber,
      totalProducts,
      totalPages,
    },
  };
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
  return result.rows[0];
}

export async function createNewProduct(productData) {
  const { name, brand, price, description, image_url } = productData;

  const result = await pool.query(
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
    [name, brand, price, description, image_url],
  );
  return result.rows[0];
}

export async function updateProductById(id, productData) {
  const { name, brand, price, description, image_url } = productData;

  const result = await pool.query(
    `
UPDATE products
SET 
name = $1,
brand = $2,
price = $3, 
description = $4,
image_url = $5,
updated_at = CURRENT_TIMESTAMP
WHERE id = $6
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
updated_at`,
    [name, brand, price, description, image_url, id],
  );

  return result.rows[0];
}

export async function deleteProductById(id) {
  const result = await pool.query(
    `
    DELETE FROM products
    WHERE id = $1
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
    [id],
  );
  return result.rows[0];
}
