import { NextFunction, Request, Response } from 'express';
import { ValidateFildsErrors } from '../interfaces';

const validateFields = (field: string | null):ValidateFildsErrors | null => {
  if (!field) {
    return { code: 400, message: 'is required' };
  }
  if (typeof field !== 'string') {
    return { code: 422, message: 'must be a string' };
  }
  if (field.length < 3) {
    return { code: 422, message: 'length must be at least 3 characters long' };
  }
  return null;
};

const validateNewProduct = (req: Request, res: Response, next:NextFunction) => {
  const { name, amount } = req.body;

  const nameError = validateFields(name);

  if (nameError) {
    const errorMessage = `"name" ${nameError.message}`;
    return res.status(nameError.code).json({ message: errorMessage });
  }
  const amountError = validateFields(amount);
  if (amountError) {
    const errorMessage = `"amount" ${amountError.message}`;
    return res.status(amountError.code).json({ message: errorMessage });
  }
  next();
};

export default validateNewProduct;
