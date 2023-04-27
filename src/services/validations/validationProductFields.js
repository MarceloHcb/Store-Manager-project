const { addProductSchema } = require('./schemas');

const validationName = (name) => {
  const { error } = addProductSchema.validate({ name });
  const err = error.message.split(' ').pop().toUpperCase();  
  if (error) return { type: err, message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validationName,
};