const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAllSales = async (_req, res) => {
  const { type, message } = await salesService.getAllSales();
  if (type) return res.status(errorMap.mapError(type)).json({ message });  
    return res.status(200).json(message);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleById(id);
    if (type) return res.status(errorMap.mapError(type)).json({ message }); 
  return res.status(200).json(message);
};

const registerSale = async (req, res) => {
  const sales = req.body;  
  const { type, message } = await salesService.registerSale(sales);  
  if (type) return res.status(errorMap.mapError(type)).json({ message });  
    return res.status(201).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteSale(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(204).end();
};

module.exports = {
  registerSale,
  getAllSales,
  getSaleById,
  deleteSale,
};