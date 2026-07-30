import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { validateProduct } from "../middleware/validateProduct.js";
import { validateProductId } from "../middleware/validateProductId.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", validateProductId, validateProduct, createProduct);
router.put("/:id", validateProductId, validateProduct, updateProduct);

export default router;
