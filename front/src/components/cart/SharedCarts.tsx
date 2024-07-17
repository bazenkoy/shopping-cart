import { useCallback, useEffect, useState } from "react";
import { Paper, Text } from "@mantine/core";
import { useNotification } from "../../context/Notification";
import { getSharedWithMeCarts } from "../../api";
import { Cart, Nullable } from "../../types";
import CartItem from "./CartItem";

interface SharedCartsProps {
  setCartOpen: (open: boolean) => void;
}

const SharedCarts = ({ setCartOpen }: SharedCartsProps) => {
  const [sharedCarts, setSharedCarts] = useState<Nullable<Cart[]>>();
  const { showNotification } = useNotification();

  const loadSharedCarts = useCallback(
    () =>
      getSharedWithMeCarts()
        .then(setSharedCarts)
        .catch((err) => showNotification(err.response.data?.error, "red")),
    [showNotification]
  );

  useEffect(() => {
    loadSharedCarts();
  }, [loadSharedCarts]);

  if (!sharedCarts || !sharedCarts.length) {
    return <Text size="lg">You don't have any carts shared with you yet.</Text>;
  }

  return sharedCarts.map((cart) => (
    <Paper p="8" shadow="sm" key={cart.id}>
      <Text>Owner: {cart.owner}</Text>
      <CartItem
        cart={cart}
        reloadCart={loadSharedCarts}
        setCartOpen={setCartOpen}
      />
    </Paper>
  ));
};

export default SharedCarts;
