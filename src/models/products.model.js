const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products;');
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE ID =?;', [id]);  
  return result;
};

const registerNewProduct = async (newProduct) => {
const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?);', [newProduct]);
  return insertId;
};

const updateProduct = async (id, name) => {
  await connection.execute('UPDATE  StoreManager.products SET name=?  WHERE id=?;', [name, id]);
  return { id, name };
};

const deleteProduct = async (id) => {
  await connection.execute('DELETE FROM StoreManager.products WHERE id=?;', [id]);
  return `Product ${id} delected`;
};
module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  updateProduct,
  deleteProduct,
};