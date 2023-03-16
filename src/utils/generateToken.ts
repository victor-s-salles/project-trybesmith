import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces';

dotenv.config();

const genarateToken = (payload:IUser) => {
  const JWT_SECRET = process.env.JWT_SECRET || 'a1f2r56asfa';

  const JWT_CONFIG: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '15m',
  };
  const token = jwt.sign({ payload }, JWT_SECRET, JWT_CONFIG);

  return token;
};

export default genarateToken;