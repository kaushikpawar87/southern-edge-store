import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./middleware/logger.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {
  res.json({
    message: "Southern Edge API is running",
  });
});

app.use("/api/products", productRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
