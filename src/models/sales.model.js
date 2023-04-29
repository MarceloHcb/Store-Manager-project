const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(`
SELECT S.id saleId, MAX(S.date) date, P.product_id productId,
CAST(SUM(P.quantity) AS SIGNED) quantity FROM StoreManager.sales S 
  JOIN StoreManager.sales_products P ON S.id = P.sale_id 
GROUP BY saleId, productId ORDER BY saleId,productId;
  `);
  return result;
};

const getSaleById = async (id) => {
  const [[...result]] = await connection
  .execute(`
  SELECT MAX(S.date) date, P.product_id productId,
CAST(SUM(P.quantity) AS SIGNED) quantity FROM StoreManager.sales S 
  JOIN StoreManager.sales_products P ON S.id = P.sale_id 
GROUP BY S.id, productId HAVING S.id = (?) ORDER BY S.id,productId;
  `, [id]);  
  return result;
};

const registerDate = async () => { 
    await connection.execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  const [saleId] = await connection
    .execute('SELECT id FROM StoreManager.sales ORDER BY id DESC LIMIT 1');
  return saleId;
};

const registerSale = async (sales) => {
  const [{ id }] = await registerDate();
  const promises = sales.map((sale) => {
    const { productId, quantity } = sale;
    return connection
      .execute(`INSERT INTO StoreManager.sales_products 
      (sale_id, product_id, quantity) VALUES(?,?,?)`, [id, productId, quantity]);
  });
  
  await Promise.all(promises);
  
  return { id, itemsSold: [...sales] };
};

const updateSale = async (id, sales) => {
const promises = sales.map((sale) => {
const { productId, quantity } = sale;
return connection
      .execute(`UPDATE StoreManager.sales_products SET quantity=?
WHERE product_id=? AND sale_id=?;`, [quantity, productId, id]);
  });  
  await Promise.all(promises);  
  return { saleId: id, itemsUpdated: [...sales] };
};

const deleteSale = async (id) => {
  await connection.execute('DELETE FROM StoreManager.sales WHERE id=?;', [id]);
  return `Sale ${id} delected`;
};

module.exports = {
  registerSale,
  getAllSales,
  getSaleById,
  registerDate,
  deleteSale,
  updateSale,
};