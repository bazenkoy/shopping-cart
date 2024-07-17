import { Button, Text, Group } from "@mantine/core";
import { useNotification } from "../../context/Notification";
import { Cart } from "../../types";
import {
  addToCart,
  removeFromCart,
  clearCart as clearCartApi,
} from "../../api";
import ProductCartItem from "./ProductCartItem";

interface CartItemProps {
  cart: Cart;
  reloadCart: () => void;
  setCartOpen: (open: boolean) => void;
}

const CartItem = ({ cart, reloadCart, setCartOpen }: CartItemProps) => {
  const { showNotification } = useNotification();

  const removeProduct = (productId: string) => {
    removeFromCart(cart.id, productId)
      .then(reloadCart)
      .catch((err) => showNotification(err.response.data?.error, "red"));
  };

  const addProduct = (productId: string) => {
    addToCart(cart.id, productId)
      .then(reloadCart)
      .catch((err) => showNotification(err.response.data?.error, "red"));
  };

  const handleCheckout = () => {
    showNotification("Proceeding to checkout", "green");
    setCartOpen(false);
  };

  const clearCart = () => {
    clearCartApi(cart.id)
      .then(reloadCart)
      .catch((err) => showNotification(err.response.data?.error, "red"));
  };

  return (
    <>
      {cart.data.map((product) => (
        <ProductCartItem
          key={product.id}
          product={product}
          removeProduct={removeProduct}
          addProduct={addProduct}
        />
      ))}
      <Text size="lg" w={500}>
        Total Price: ${cart.total.toFixed(2)}
      </Text>
      <Group mt="md">
        <Button variant="outline" color="green" onClick={handleCheckout}>
          Checkout
        </Button>
        <Button variant="outline" color="red" onClick={clearCart}>
          Clear
        </Button>
      </Group>
    </>
  );
};

export default CartItem;
