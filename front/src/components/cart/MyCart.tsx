import { useEffect, useState, useCallback } from "react";
import { Text, Button, Group, TextInput } from "@mantine/core";
import { useUserData } from "../../context/User";
import { useNotification } from "../../context/Notification";
import { getCart, shareCart } from "../../api";
import { Cart, Nullable } from "../../types";
import CartItem from "./CartItem";

interface SharedCartsProps {
  setCartOpen: (open: boolean) => void;
}

const MyCart = ({ setCartOpen }: SharedCartsProps) => {
  const [cart, setCart] = useState<Nullable<Cart>>();
  const [name, setName] = useState("");
  const user = useUserData();
  const { showNotification } = useNotification();

  const loadMyCartCart = useCallback(
    () =>
      getCart(user.cartId)
        .then(setCart)
        .catch((err) => showNotification(err.response.data?.error, "red")),
    [showNotification, user.cartId]
  );

  useEffect(() => {
    loadMyCartCart();
  }, [loadMyCartCart]);

  if (!cart || !cart?.data?.length) {
    return <Text size="lg">Your cart is empty</Text>;
  }

  const handleShare = () => {
    if (name.length) {
      shareCart(name)
        .then(() => {
          showNotification(`You shared your cart with ${name}`, "green");
          setName("");
        })
        .catch((err) => showNotification(err.response.data?.error, "red"));
    } else {
      showNotification("Enter user name to share cart with", "red");
    }
  };

  return (
    <>
      <CartItem
        cart={cart}
        reloadCart={loadMyCartCart}
        setCartOpen={setCartOpen}
      />
      <Group mt="md">
        <TextInput
          placeholder="Enter user name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button variant="outline" color="blue" onClick={handleShare}>
          Share
        </Button>
      </Group>
    </>
  );
};

export default MyCart;
