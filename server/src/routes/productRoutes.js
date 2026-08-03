import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { validateProduct } from "../middleware/validateProduct.js";
import { validateProductId } from "../middleware/validateProductId.js";
import { validateProductQuery } from "../middleware/validateProductQuery.js";

const router = express.Router();

router.get("/", validateProductQuery, getProducts);
router.get("/:id", validateProductId, getProduct);
router.post("/", validateProduct, createProduct);
router.put("/:id", validateProductId, validateProduct, updateProduct);
router.delete("/:id", validateProductId, deleteProduct);

export default router;
