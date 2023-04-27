const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const registerSale = async (req, res) => {
  const sales = req.body;  
  const { type, message } = await salesService.registerSale(sales);  
  if (type) return res.status(errorMap.mapError(type)).json({ message });  
    return res.status(201).json(message);
};

module.exports = {
  registerSale,
};