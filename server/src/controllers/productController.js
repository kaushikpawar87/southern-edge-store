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

export async function getProduct(req, res, next) {
  try {
    const id = req.productId;

    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
}

export async function createProduct(req, res, next) {
  try {
    const { name, brand, price, description, image } = req.body;

    const newProduct = await createNewProduct({
      name,
      brand,
      price,
      description,
      image,
    });

    return res.status(201).json(newProduct);
  } catch (error) {
    return next(error);
  }
}

export function updateProduct(req, res) {
  const id = req.productId;

  const { name, brand, price, description, image_url } = req.body;

  const updatedProduct = updateProductById(id, {
    name,
    brand,
    price,
    description,
    image_url,
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
