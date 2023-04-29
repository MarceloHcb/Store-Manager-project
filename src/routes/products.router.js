const express = require('express');
const { productController } = require('../controllers');
const { validateProductId } = require('../middlewares/productsValidations');

const router = express.Router();

router.get('/search', productController.searchProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.registerNewProduct);
router.put('/:id', validateProductId, productController.updateProduct);
router.delete('/:id', validateProductId, productController.deleteProduct);

module.exports = router;
