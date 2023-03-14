import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';

import { User } from '../interfaces';

const createNewUser = async (user:User) => {
  const { username, vocation, level, password } = user;

  const query = `
  INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)`;
  const data = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, data);

  const { insertId } = result;

  return insertId;
};
const getByUserName = async (username:string) => {
  const query = 'SELECT * FROM Trybesmith.users WHERE username =?';
  const [[result]] = await connection.execute<User[] & RowDataPacket[]>(query, [username]);
  return result || null;
};

const userModel = {
  createNewUser,
  getByUserName,
};

export default userModel;