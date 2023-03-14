export interface IProduct {
  name: string;
  amount: string;
  order_id?: string;
}
export interface Product extends IProduct {
  id: number;
}

export interface IUser {
  username: string;
  vocation: string;
  level: number;
}
export interface User extends IUser {
  password: string;
}
