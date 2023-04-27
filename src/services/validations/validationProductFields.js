const { addProductSchema } = require('./schemas');

const validationName = (name) => {
  const { error } = addProductSchema.validate({ name });
  const errType = error && error.message.split(' ').pop().toUpperCase();
  if (error) return { type: errType, message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validationName,
};