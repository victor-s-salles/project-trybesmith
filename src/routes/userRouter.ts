import { Router } from 'express';

import userController from '../controllers/userController';
import validateNewUser from '../middlewares/validadeNewUser';

const router = Router();

router.post('/', validateNewUser, userController.createNewUser);

export default router;
