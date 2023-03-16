import { Orders } from '../interfaces';
import orderModel from '../models/orderModel';

const getAll = async (): Promise<Orders[]> => {
  const orders = await orderModel.getAll();

  return orders;
};

const createNewOrder = async (id: number, products:Array<number>) => {
  const newOrderId = await orderModel.createNewOrder(id);

  const newOrders = products.map((product) => orderModel
    .updateNewOrderProducts({ id: product, order_id: newOrderId }));
  Promise.all(newOrders);

  return { userId: id, productsIds: products };
};

const orderService = {
  getAll,
  createNewOrder,
};
export default orderService;