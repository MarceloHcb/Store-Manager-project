const joi = require('joi');

const addProductSchema = joi.object({
  name: joi.string().min(5).required(),
});

module.exports = {
  addProductSchema,
};