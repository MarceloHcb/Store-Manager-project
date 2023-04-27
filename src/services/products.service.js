const { productModel } = require('../models');
const { validationName } = require('./validations/validationProductFields');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();  
  return { type: null, message: products };
};

const getProductById = async (id) => {
  const product = await productModel.getProductById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

const registerNewProduct = async (name) => {
  const error = validationName(name);
  if (error.type) return error;
  const newProduct = await productModel.registerNewProduct(name);  
  return { type: null, message: newProduct };
};

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
};