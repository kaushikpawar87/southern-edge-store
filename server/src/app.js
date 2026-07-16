import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

app.use(cors({ origin: "http://localhost:5173" }));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Southern Edge API is running",
  });
});

app.use("/api/products", productRoutes);

export default app;
