const connection = require('./connection');

const registerDate = async () => { 
    await connection.execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
  const [saleId] = await connection
    .execute('SELECT id FROM StoreManager.sales ORDER BY id DESC LIMIT 1');
  return saleId;
};
// const registerSale = async (sales) => {
//   await connection.execute('INSERT INTO StoreManager.sales (date) VALUES (NOW())');
//   const [{ id }] = await registerDate();  
//   console.log(id);
//   sales.map((sale) => {
//   const { productId, quantity } = sale;  
//   connection.execute(`INSERT INTO StoreManager.sales_products 
// (sale_id, product_id, quantity) VALUES(?,?,?)`, [id, productId, quantity]);
//   });
//   return { id, itemsSold: [...sales] };
// };

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
module.exports = {
  registerSale,
};