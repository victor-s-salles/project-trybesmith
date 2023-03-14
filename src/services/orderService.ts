import { Orders } from '../interfaces';
import orderModel from '../models/orderModel';

const getAll = async (): Promise<Orders[]> => {
  const orders = await orderModel.getAll();

  return orders;
};

const orderService = {
  getAll,
};
export default orderService;