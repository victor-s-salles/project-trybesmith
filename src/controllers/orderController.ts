import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getAll = async (req: Request, res: Response) => {
  const products = await orderService.getAll();
  return res.status(200).json(products);
};

const createNewOrder = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  
  const { id } = req.body.userId;
  const newOrderdone = await orderService.createNewOrder(id, productsIds);
  return res.status(201).json(newOrderdone);
};

const orderController = {
  getAll,
  createNewOrder,
};
export default orderController;