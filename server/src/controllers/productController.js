import { getAllProducts, getProductById } from "../services/productService.js";

export function getProducts(req, res) {
  const { brand, search, sort } = req.query;

  const products = getAllProducts({ brand, search, sort });

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
