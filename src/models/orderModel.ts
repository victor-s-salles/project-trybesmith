import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';

import { Orders, NewOrder } from '../interfaces';

const getAll = async ():Promise<Orders[]> => {
  const query = `
  SELECT ord.id, ord.user_id as userId, JSON_ARRAYAGG(pr.id) as productsIds
  FROM Trybesmith.orders AS ord
  INNER JOIN Trybesmith.products as pr 
  ON ord.id = pr.order_id GROUP BY ord.id`;

  const [orders] = await connection.execute<Orders[] & RowDataPacket[]>(query);

  return orders;
};
const createNewOrder = async (userId:number):Promise<number> => {
  const query = `
  INSERT INTO Trybesmith.orders (user_id) VALUES (?)
  `;
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  
  const { insertId } = result;

  return insertId;
};

const updateNewOrderProducts = async (order:NewOrder):Promise<number> => {
  const query = `
  UPDATE Trybesmith.products SET order_id = ? WHERE id = ?
  `;
  const values = [order.order_id, order.id];
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { affectedRows } = result;

  return affectedRows;
};

const orderModel = {
  getAll,
  createNewOrder,
  updateNewOrderProducts,
};
export default orderModel;