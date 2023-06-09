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

const updateProduct = async (id, name) => {
  const error = validationName(name);
  if (error.type) return error;
  const newProduct = await productModel.updateProduct(id, name);  
  return { type: null, message: newProduct };
};

const deleteProduct = async (id) => {
  await productModel.deleteProduct(id);
  return { type: null, message: '' };
};

const searchProduct = async (searchParam) => {
  const searchedProducts = await productModel.searchProduct(searchParam);
  return { type: null, message: searchedProducts };
};

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};