import { Drawer, Tabs, Paper } from "@mantine/core";
import MyCart from "./MyCart";
import SharedCarts from "./SharedCarts";

interface CartSidebarProps {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartSidebar = ({ cartOpen, setCartOpen }: CartSidebarProps) => (
  <Drawer
    opened={cartOpen}
    onClose={() => setCartOpen(false)}
    padding="sm"
    title="Cart"
    size="md"
    position="right"
  >
    <Tabs defaultValue="myCart">
      <Tabs.List>
        <Tabs.Tab value="myCart">My Cart</Tabs.Tab>
        <Tabs.Tab value="sharedCarts">Carts shared with me</Tabs.Tab>
      </Tabs.List>

      <Paper pt="16">
        <Tabs.Panel value="myCart">
          <MyCart setCartOpen={setCartOpen} />
        </Tabs.Panel>
        <Tabs.Panel value="sharedCarts">
          <SharedCarts setCartOpen={setCartOpen} />
        </Tabs.Panel>
      </Paper>
    </Tabs>
  </Drawer>
);

export default CartSidebar;
