import { Router } from 'express';

import orderController from '../controllers/orderController';
import validateNewOrderFields from '../middlewares/validateNewOrder';
import validateJWT from '../middlewares/auth';

const router = Router();

router.get('/', orderController.getAll);

router.post('/', validateJWT, validateNewOrderFields, orderController.createNewOrder);

export default router;
