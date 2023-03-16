import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import userModel from '../models/userModel';
import { JwtToken } from '../interfaces';

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'asdghj23234'; 

const validateJWT = async (req: Request, res:Response, next:NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret) as JwtToken;
    console.log(decoded);
    
    const user = await userModel.getByUserName(decoded.payload.username);
    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }
      
    req.body.userId = user;
      
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateJWT;