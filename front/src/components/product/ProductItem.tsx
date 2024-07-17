import { Paper, Button, Text, Group, Grid } from "@mantine/core";
import { FaCartArrowDown } from "react-icons/fa";
import { Product } from "../../types";
import { addToCart } from "../../api";
import { useUserData } from "../../context/User";
import { useNotification } from "../../context/Notification";

interface ProductListProps {
  product: Product;
}

const ProductItem = ({ product }: ProductListProps) => {
  const user = useUserData();
  const { showNotification } = useNotification();

  const handleAddToCart = () =>
    addToCart(user.cartId, product.id)
      .then(() => showNotification("Product was added to your cart.", "green"))
      .catch((err) => showNotification(err.response.data?.error, "red"));

  return (
    <Paper key={product.id} shadow="sm" p="xl" mb={8}>
      <Grid align="center">
        <Grid.Col span={8}>
          <Group mb="8" mt="8">
            <Text size="lg" fw={500}>
              {product.name}
            </Text>
            <Text c="blue">${product.price}</Text>
          </Group>
          <Text size="sm" style={{ lineHeight: 1.5 }}>
            {product.description}
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Button
            variant="light"
            color="blue"
            fullWidth
            onClick={handleAddToCart}
          >
            <Text mr="4">Add to Cart</Text>
            <FaCartArrowDown />
          </Button>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default ProductItem;
