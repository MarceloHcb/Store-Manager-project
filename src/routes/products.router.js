const express = require('express');
const { productController } = require('../controllers');
const { validateProductId } = require('../middlewares/productsValidations');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.registerNewProduct);
router.put('/:id', validateProductId, productController.updateProduct);
module.exports = router;
