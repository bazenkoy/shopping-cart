import { CSSProperties } from "react";
import { Paper, Loader as LaderComponent } from "@mantine/core";

const lockScreenLoaderStyles: CSSProperties = {
  display: "flex",
  height: "100vh",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 1000,
  background: "#FFF",
};

const LockScreenLoader = () => (
  <Paper style={lockScreenLoaderStyles}>
    <LaderComponent />
  </Paper>
);

export default LockScreenLoader;
