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
  console.log(type, message);
 if (type) return res.status(errorMap.mapError(type)).json({ message }); 
 return res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getProductById,
};