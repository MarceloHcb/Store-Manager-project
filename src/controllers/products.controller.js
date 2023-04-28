const { productService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAllProducts = async (_res, res) => {
  const { type, message } = await productService.getAllProducts();
  if (type) return res.status(errorMap.mapError(type)).json(message);
  return res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductById(id);  
  if (type) return res.status(errorMap.mapError(type)).json({ message }); 
  return res.status(200).json(message);
};

const registerNewProduct = async (req, res) => {
  const { name } = req.body;  
  const { type, message } = await productService.registerNewProduct(name);
  if (type) return res.status(errorMap.mapError(type)).json({ message });  
  return res.status(201).json({ id: message, name });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productService.updateProduct(id, name);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.deleteProduct(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(204).end();
};

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  updateProduct,
  deleteProduct,
};