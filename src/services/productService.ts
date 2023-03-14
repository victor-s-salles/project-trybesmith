import { IProduct, Product } from '../interfaces';
import productModel from '../models/productModel';

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();

  return products;
};

const createProduct = async (product:Product):Promise<IProduct> => {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
};

const productService = {
  getAll,
  createProduct,
};

export default productService;