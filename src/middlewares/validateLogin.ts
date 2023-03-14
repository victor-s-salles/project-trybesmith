import { NextFunction, Request, Response } from 'express';
import userModel from '../models/userModel';

const validateLoginFields = async (req:Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body; 
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

const validateLoginCredentials = async (req:Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body; 
  const user = await userModel.getByUserName(username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  req.body.user = user;
  next();
};

const validateLogin = {
  validateLoginCredentials,
  validateLoginFields,
};
export default validateLogin;