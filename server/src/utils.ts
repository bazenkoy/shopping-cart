import { products } from "./database";
import { Cart, Product } from "./types";

type ProductResponse = Product & { count: number };

export const cardProductAdapter = (cart: Cart, cardId: string) =>
  Object.entries(cart.data).reduce<{
    data: ProductResponse[];
    total: number;
    id: string;
    owner: string;
  }>(
    (acc, item) => {
      const [productId, count] = item;
      const product = products.find((el) => el.id === productId) as Product;
      acc.data.push({ ...product, count });
      acc.total += count * product?.price;
      return acc;
    },
    { data: [], id: cardId, total: 0, owner: cart.owner }
  );
