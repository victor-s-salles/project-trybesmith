export interface IProduct {
  name: string;
  amount: string;
  order_id?: string;
}
export interface Product extends IProduct {
  id: number;
}