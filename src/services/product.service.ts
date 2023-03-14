import { IProduct } from '../interfaces';
import productModel from '../models/Product.model';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();

  return products;
};

const productService = {
  getAll,
};

export default productService;