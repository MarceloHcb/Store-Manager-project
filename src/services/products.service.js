const { productModel } = require('../models');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();  
  return { type: null, message: products };
};

const getProductById = async (id) => {
  const product = await productModel.getProductById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};