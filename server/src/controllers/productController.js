import {
  getAllProducts,
  getProductById,
  getProductByBrand,
} from "../services/productService.js";

export function getProducts(req, res) {
  const products = getAllProducts();

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

export function getBrand(req, res) {
  const brand = req.params.brand;
  const productBrand = getProductByBrand(brand);

  if (!productBrand) {
    return res.status(404).json({
      message: "Brand not found",
    });
  }
  res.status(200).json(productBrand);
}
