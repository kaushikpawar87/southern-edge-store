import express from "express";
import {
  getProducts,
  getProduct,
  getBrand,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.get("/brand/:brand", getBrand);

export default router;
