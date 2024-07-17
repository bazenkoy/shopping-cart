import { useState, useEffect } from "react";
import { Paper, Title, Container } from "@mantine/core";
import { Product, Nullable } from "../../types";
import { getProducts } from "../../api";
import LockScreenLoader from "../LockScreenLoader";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState<Nullable<Product[]>>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <LockScreenLoader />;
  }

  if (!products || !products.length) {
    return (
      <Paper shadow="sm" p="xl" mb={8}>
        <Title order={4}>There is no products yet</Title>
      </Paper>
    );
  }

  return (
    <Container p="16">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default ProductList;
