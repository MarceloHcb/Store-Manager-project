const { addSaleSchema } = require('./schemas');

const validationSales = (sale) => {  
    const { error } = addSaleSchema.validate(sale);    
    const errType = error && error.message.split(' ').pop().toUpperCase();    
    if (error) return { type: errType, message: error.message };
    return { type: null, message: '' };
};

module.exports = {
  validationSales,
};