import { RowDataPacket } from 'mysql2';
import connection from './connection';

import { IProduct } from '../interfaces';

const getAll = async ():Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.products';

  const [products] = await connection.execute<IProduct[] & RowDataPacket[]>(query);

  return products;
};

const productModel = {
  getAll,
};

export default productModel;