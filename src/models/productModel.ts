import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';

import { IProduct, Product } from '../interfaces';

const getAll = async ():Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.products';

  const [products] = await connection.execute<IProduct[] & RowDataPacket[]>(query);

  return products;
};

const createProduct = async (product:IProduct):Promise<Product> => {
  const { name, amount } = product;
  const query = `
  INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)`;
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);

  const { insertId } = result;

  const newProduct = { id: insertId, name, amount };

  return newProduct;
};
const productModel = {
  getAll,
  createProduct,
};
export default productModel;