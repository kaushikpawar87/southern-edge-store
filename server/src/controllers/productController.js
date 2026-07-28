import {
  getAllProducts,
  getProductById,
  createNewProduct,
} from "../services/productService.js";

export function getProducts(req, res) {
  const { brand, search, sort, page, limit } = req.query;

  const products = getAllProducts({ brand, search, sort, page, limit });

  res.status(200).json(products);
}

export function getProduct(req, res) {
  const productId = Number(req.params.id);
  const product = getProductById(productId);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  res.status(200).json(product);
}

export function createProduct(req, res) {
  const { name, brand, price, description } = req.body;

  if (!name || !brand || price === undefined) {
    return res.status(400).json({
      message: "Name, brand and price are required.",
    });
  }

  if (typeof name !== "string" || typeof brand !== "string") {
    res.status(400).json({
      message: "Name and brand must be a string",
    });
  }

  if (typeof price !== "number" || price <= 0) {
    res.status(400).json({
      message: "Price must be a number greater than 0",
    });
  }

  const newProduct = createNewProduct({ name, brand, price, description });

  return res.status(201).json(newProduct);
}
