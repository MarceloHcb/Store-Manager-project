const express = require('express');
const { salesController } = require('../controllers');
const { validateSaleId } = require('../middlewares/salesValidations');

const router = express.Router();

router.get('/', salesController.getAllSales);
router.get('/:id', validateSaleId, salesController.getSaleById);
router.post('/', salesController.registerSale);
router.put('/:id', validateSaleId, salesController.updateSale);
router.delete('/:id', validateSaleId, salesController.deleteSale);

module.exports = router;
