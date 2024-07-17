import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import App from "./App";
import UserContextProvider from "./context/User";
import NotificationProvider from "./context/Notification";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <UserContextProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </UserContextProvider>
  </MantineProvider>
);
