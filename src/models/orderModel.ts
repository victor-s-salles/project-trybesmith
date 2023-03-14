import { RowDataPacket } from 'mysql2';
import connection from './connection';

import { Orders } from '../interfaces';

const getAll = async ():Promise<Orders[]> => {
  const query = `
  SELECT ord.id, ord.user_id as userId, JSON_ARRAYAGG(pr.id) as productsIds
  FROM Trybesmith.orders AS ord
  INNER JOIN Trybesmith.products as pr 
  ON ord.id = pr.order_id GROUP BY ord.id`;

  const [orders] = await connection.execute<Orders[] & RowDataPacket[]>(query);

  return orders;
};

const orderModel = {
  getAll,
};
export default orderModel;