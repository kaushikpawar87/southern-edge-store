import {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
} from "../services/productService.js";

export async function getProducts(req, res, next) {
  try {
    const products = await getAllProducts();

    return res.status(200).json({
      products,
    });
  } catch (error) {
    return next(error);
  }
}

export function getProduct(req, res) {
  console.log("Route parameter", req.params.id);
  console.log("Validated product ID", req.productId);
  console.log("Validated ID type", typeof req.productId);

  const id = req.productId;

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

  const newProduct = createNewProduct({ name, brand, price, description });

  return res.status(201).json(newProduct);
}

export function updateProduct(req, res) {
  const id = req.productId;

  const { name, brand, price, description } = req.body;

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

export function deleteProduct(req, res) {
  const id = req.productId;

  const deletedProduct = deleteProductById(id);

  if (!deletedProduct) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  return res.status(200).json({
    message: "Product deleted successfully",
    product: deletedProduct,
  });
}
