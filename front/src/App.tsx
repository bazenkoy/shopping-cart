import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import ProductList from "./components/product";

const headerStyles = { height: 60 };

const App = () => {
  return (
    <AppShell header={headerStyles} padding="md">
      <Header />
      <AppShell.Main>
        <ProductList />
      </AppShell.Main>
    </AppShell>
  );
};

export default App;
