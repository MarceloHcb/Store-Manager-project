const { salesService } = require('../services');

const validateSaleId = async (req, res, next) => {
  const { id } = req.params;
  const allSales = await salesService.getSaleById(id);  
  if (allSales.message.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return next();
};

module.exports = {
  validateSaleId,
};