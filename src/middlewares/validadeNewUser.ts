import { NextFunction, Request, Response } from 'express';
import { ValidateFildsErrors } from '../interfaces';

const isRequired = 'is required';

const validateUsernameAndVocation = (field: string | null):ValidateFildsErrors | null => {
  if (!field) {
    return { code: 400, message: isRequired };
  }
  if (typeof field !== 'string') {
    return { code: 422, message: 'must be a string' };
  }
  if (field.length < 3) {
    return { code: 422, message: 'length must be at least 3 characters long' };
  }
  return null;
};

const validatePassword = (password: string | null):ValidateFildsErrors | null => {
  if (!password) {
    return { code: 400, message: isRequired };
  }
  if (typeof password !== 'string') {
    return { code: 422, message: 'must be a string' };
  }
  if (password.length < 8) {
    return { code: 422, message: 'length must be at least 8 characters long' };
  }
  return null;
};

const validateLevel = (level: number | null):ValidateFildsErrors | null => {
  if (!level && typeof level !== 'number') {
    return { code: 400, message: isRequired };
  }
  if (typeof level !== 'number') {
    return { code: 422, message: 'must be a number' };
  }
  if (level <= 0) {
    return { code: 422, message: 'must be greater than or equal to 1' };
  }
  return null;
};

const validateNewUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  const usernameErrors = validateUsernameAndVocation(username);
  if (usernameErrors) {
    const errorMessage = `"username" ${usernameErrors.message}`;
    return res.status(usernameErrors.code).json({ message: errorMessage });
  } const vocationErrors = validateUsernameAndVocation(vocation);
  if (vocationErrors) {
    const errorMessage = `"vocation" ${vocationErrors.message}`;
    return res.status(vocationErrors.code).json({ message: errorMessage });
  } const levelErrors = validateLevel(level);
  if (levelErrors) {
    const errorMessage = `"level" ${levelErrors.message}`;
    return res.status(levelErrors.code).json({ message: errorMessage });
  } const passwordErrors = validatePassword(password);
  if (passwordErrors) {
    const errorMessage = `"password" ${passwordErrors.message}`;
    return res.status(passwordErrors.code).json({ message: errorMessage });
  } next();
};

export default validateNewUser;