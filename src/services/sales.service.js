const { salesModel, productModel } = require('../models');
const { validationSales } = require('./validations/validationSalesFields');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  return { type: null, message: sales };
};

const getSaleById = async (id) => {
  const sale = await salesModel.getSaleById(id);
  return { type: null, message: sale };
};

const registerSale = async (sales) => {
  const allProducts = await productModel.getAllProducts();
  const errors = sales.map((sale) => validationSales(sale));  
  const hasErrors = errors.some((err) => err.type !== null);
  if (hasErrors) {
    const error = errors.find((err) => err.type !== null);    
    return error;
  }
  const productIds = allProducts.map(({ id }) => id);
  const hasProductNotFound = sales
    .some(({ productId }) => productId && !productIds.includes(productId));
  if (hasProductNotFound) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  const sale = await salesModel.registerSale(sales);
  return { type: null, message: sale };
};

module.exports = {
  registerSale,
  getAllSales,
  getSaleById,
};