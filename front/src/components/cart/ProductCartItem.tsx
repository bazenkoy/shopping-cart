import { Button, Text, Paper, Group } from "@mantine/core";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import { CartItem as CartItemType } from "../../types";

interface ProductCartItemProps {
  product: CartItemType;
  removeProduct: (productId: string) => void;
  addProduct: (productId: string) => void;
}

const ProductCartItem = ({
  product,
  removeProduct,
  addProduct,
}: ProductCartItemProps) => {
  const handleRemoveProduct = () => removeProduct(product.id);

  return (
    <Paper withBorder p="md" mb="sm">
      <Group>
        <Text>{product.name}</Text>
        <Group p="xs">
          <Text>${(product.price * product.count).toFixed(2)}</Text>
          {product.count === 1 ? (
            <Button variant="outline" color="red" onClick={handleRemoveProduct}>
              <FaTrashAlt />
            </Button>
          ) : (
            <Button variant="outline" onClick={handleRemoveProduct}>
              <FaMinus />
            </Button>
          )}
          <Text>{product.count}</Text>
          <Button variant="outline" onClick={() => addProduct(product.id)}>
            <FaPlus />
          </Button>
        </Group>
      </Group>
    </Paper>
  );
};

export default ProductCartItem;
