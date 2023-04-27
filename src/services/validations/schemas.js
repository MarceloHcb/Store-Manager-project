const joi = require('joi');

const addSaleSchema = joi.object({
  productId: joi.number().min(1).required(),
  quantity: joi.number().min(1).required(),
});
const addProductSchema = joi.object({
  name: joi.string().min(5).required(),
});

module.exports = {
  addProductSchema,
  addSaleSchema,
};