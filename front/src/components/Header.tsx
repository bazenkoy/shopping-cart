import { useState } from "react";
import { AppShell, Group, Button, Tooltip, Text, Portal } from "@mantine/core";
import { FaShoppingCart } from "react-icons/fa";
import { useUserData } from "../context/User";
import CartSidebar from "./cart";

const Header = () => {
  const user = useUserData();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Text>User: {user.name}</Text>
        <Tooltip label="Open cart">
          <Button
            variant="light"
            color="blue"
            onClick={() => setCartOpen(true)}
            radius="lg"
          >
            <FaShoppingCart />
          </Button>
        </Tooltip>
      </Group>
      <Portal>
        <CartSidebar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </Portal>
    </AppShell.Header>
  );
};

export default Header;
