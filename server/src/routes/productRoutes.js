import express from "express";
import { getProducts } from "../controllers/productController";
const router = express.router();

router.get("/", getProducts);

export default router;
