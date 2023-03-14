import { Request, Response } from 'express';
import productService from '../services/productService';

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

const createProduct = async (req:Request, res: Response) => {
  const newProduct = await productService.createProduct(req.body);
  return res.status(201).json(newProduct);
};

const productController = {
  getAll,
  createProduct,
};

export default productController;