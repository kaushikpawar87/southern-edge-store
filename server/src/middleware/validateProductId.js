export function validateProductId(req, res, next) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "Product ID must be a number.",
    });
  }
  req.productId = id;

  next();
}
