const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products;');
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE ID = ?', [id]);  
  return result;
};

const registerNewProduct = async (newProduct) => {
const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [newProduct]);
  return insertId;
};

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
};