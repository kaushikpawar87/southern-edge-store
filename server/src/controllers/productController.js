import {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
} from "../services/productService.js";

export function getProducts(req, res) {
  const { brand, search, sort, page, limit } = req.query;

  const products = getAllProducts({ brand, search, sort, page, limit });

  return res.status(200).json(products);
}

export function getProduct(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Product ID must be a number",
    });
  }

  const product = getProductById(id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  return res.status(200).json(product);
}

export function createProduct(req, res) {
  const { name, brand, price, description } = req.body;

  if (!name || !brand || price === undefined) {
    return res.status(400).json({
      message: "Name, brand and price are required.",
    });
  }

  if (typeof name !== "string" || typeof brand !== "string") {
    return res.status(400).json({
      message: "Name and brand must be a string",
    });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      message: "Price must be a number greater than 0",
    });
  }

  const newProduct = createNewProduct({ name, brand, price, description });

  return res.status(201).json(newProduct);
}

export function updateProduct(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Product ID must be a number",
    });
  }

  const { name, brand, price, description } = req.body;

  if (!name || !brand || price === undefined) {
    return res.status(400).json({
      message: "Name, brand and price are required.",
    });
  }

  if (typeof name !== "string" || typeof brand !== "string") {
    return res.status(400).json({
      message: "Name and brand must be a string",
    });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      message: "Price must be a number greater than 0",
    });
  }

  const updatedProduct = updateProductById(id, {
    name,
    brand,
    price,
    description,
  });

  if (!updatedProduct) {
    return res.status(404).json({
      message: "Product not found.",
    });
  }
  return res.status(200).json(updatedProduct);
}
