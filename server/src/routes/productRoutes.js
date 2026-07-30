import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { validateProduct } from "../middleware/validateProduct.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", validateProduct, createProduct);
router.put("/:id", validateProduct, updateProduct);

export default router;
