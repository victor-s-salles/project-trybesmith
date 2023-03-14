import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import login from '../controllers/loginController';

const { validateLoginCredentials, validateLoginFields } = validateLogin;

const router = Router();

router.post('/', validateLoginFields, validateLoginCredentials, login);

export default router;
