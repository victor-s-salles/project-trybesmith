import { Request, Response } from 'express';
import genarateToken from '../utils/generateToken';

const login = async (req:Request, res: Response) => {
  const { user } = req.body;
  const { id, password, level, ...rest } = user;

  const token = genarateToken(rest);

  return res.status(200).json({ token });
};

export default login;