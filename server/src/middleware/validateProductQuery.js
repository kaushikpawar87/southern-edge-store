const allowedSortValues = ["price", "-price"];

export function validateProductQuery(req, res, next) {
  const { page, limit, sort } = req.query;

  if (page !== undefined) {
    const pageNumber = Number(page);

    if (!Number.isInteger(pageNumber) || pageNumber < 0) {
      return res.status(400).json({
        message: "Page must be a positve integer.",
      });
    }
  }

  if (limit !== undefined) {
    const limitNumber = Number(limit);

    if (!Number.isInteger(limitNumber) || limitNumber < 0 || limitNumber > 50) {
      return res.status(400).json({
        message: "Limit must be an integer between 1 and 50.",
      });
    }
  }

  if (sort !== undefined && !allowedSortValues.includes(sort)) {
    return res.status(400).json({
      message: "Sort must be either 'price' or '-price',",
    });
  }

  next();
}
