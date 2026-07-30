export function validateProduct(req, res, next) {
  const { name, brand, price } = req.body;

  if (!name || !brand || price === undefined) {
    return res.status(400).json({
      message: "Name, brand and price are required.",
    });
  }

  if (typeof name !== "string" || typeof brand !== "string") {
    return res.status(400).json({
      message: "Name and brand must be a string",
    });
  }

  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      message: "Price must be a number greater than 0",
    });
  }
  next();
}
