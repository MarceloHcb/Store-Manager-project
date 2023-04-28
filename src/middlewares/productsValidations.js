const { productService } = require('../services');

const validateProductId = async (req, res, next) => {
  const { id } = req.params;
  const allProducts = await productService.getProductById(id);  
  if (allProducts.type !== null) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return next();
};

module.exports = {
  validateProductId,
};