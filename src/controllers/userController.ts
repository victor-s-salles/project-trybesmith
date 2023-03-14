import { Request, Response } from 'express';
import userService from '../services/userService';

const createNewUser = async (req:Request, res: Response) => {
  const token = await userService.createNewUser(req.body);
  if (token) {
    return res.status(201).json({ token });
  }
  return res.status(404).json({ message: 'Erro no cadastro' });
};

const userController = {
  createNewUser,
};

export default userController;