import { Router } from 'express';

import productController from '../controllers/productController';
import validateNewProduct from '../middlewares/validateNewProductFields';

const router = Router();

router.get('/', productController.getAll);

router.post('/', validateNewProduct, productController.createProduct);

export default router;
