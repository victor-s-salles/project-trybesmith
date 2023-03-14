import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getAll = async (req: Request, res: Response) => {
  const products = await orderService.getAll();
  return res.status(200).json(products);
};

const orderController = {
  getAll,
};
export default orderController;