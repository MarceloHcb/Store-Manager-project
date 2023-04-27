const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  REQUIRED: 400,
  LONG: 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};