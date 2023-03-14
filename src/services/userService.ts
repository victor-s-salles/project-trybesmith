import { User } from '../interfaces';
import userModel from '../models/userModel';
import genarateToken from '../utils/generateToken';

const createNewUser = async (user:User):Promise<string | null> => {
  const userID = await userModel.createNewUser(user);
  if (userID) {
    const { password, ...rest } = user;
    const token = genarateToken(rest);
    return token;
  }
  return null;
};

const userService = {
  createNewUser,
};

export default userService;
