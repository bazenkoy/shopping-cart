export type Nullable<T> = T | null;

export interface User {
  id: string;
  name: string;
  cartId: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface CartItem {
  count: number;
  description: string;
  id: string;
  name: string;
  price: number;
}

export interface Cart {
  data: CartItem[];
  id: string;
  total: number;
  owner: string;
}
