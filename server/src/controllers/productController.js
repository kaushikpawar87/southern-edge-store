import {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
} from "../services/productService.js";

export async function getProducts(req, res, next) {
  try {
    const { brand, search } = req.query;
    const products = await getAllProducts({ brand, search });
    console.log(req.query);

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
    const { name, brand, price, description, image_url } = req.body;

    const newProduct = await createNewProduct({
      name,
      brand,
      price,
      description,
      image_url,
    });

    return res.status(201).json(newProduct);
  } catch (error) {
    return next(error);
  }
}

export async function updateProduct(req, res, next) {
  try {
    const id = req.productId;

    const { name, brand, price, description, image_url } = req.body;

    const updatedProduct = await updateProductById(id, {
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
  } catch (error) {
    return next(error);
  }
}

export async function deleteProduct(req, res, next) {
  try {
    const id = req.productId;

    const deletedProduct = await deleteProductById(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    return next(error);
  }
}
