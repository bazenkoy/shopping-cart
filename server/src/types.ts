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

export interface Cart {
  owner: string;
  data: {
    [productId: string]: number;
  };
}
