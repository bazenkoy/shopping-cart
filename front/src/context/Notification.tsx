import {
  useEffect,
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  PropsWithChildren,
  useMemo,
} from "react";
import { Alert, AlertProps } from "@mantine/core";

type NotificationType = AlertProps["color"];

interface Notification {
  id: string;
  message: string;
  type: NotificationType;
}

interface NotificationContextType {
  showNotification: (message: string, type: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);

  return context as NotificationContextType;
};

interface NotificationProviderProps {
  autoHide?: number;
}

const NotificationProvider = ({
  children,
  autoHide = 3000,
}: PropsWithChildren<NotificationProviderProps>) => {
  const [notifications, setNotification] = useState<Notification[]>([]);
  const timerRef = useRef<Record<string, number>>({});

  const hideNotification = useCallback((id: string) => {
    setNotification((n) => n.filter((el) => el.id !== id));
    clearTimeout(timerRef.current[id]);
  }, []);

  const showNotification = useCallback(
    (message: string, type: NotificationType) => {
      const id = String(Math.random());
      setNotification((n) => [...n, { message, type, id }]);

      if (timerRef.current[id]) {
        clearTimeout(timerRef.current[id]);
      }

      const timer = setTimeout(() => {
        hideNotification(id);
      }, autoHide);

      timerRef.current[id] = timer;
    },
    [autoHide, hideNotification]
  );

  useEffect(() => {
    const timers = timerRef.current;

    return () => {
      if (timers) {
        Object.values(timers).forEach(clearTimeout);
      }
    };
  }, []);

  const value = useMemo(() => ({ showNotification }), [showNotification]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {notifications.length && (
        <div
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 1000,
            background: "#fff",
          }}
        >
          {notifications.map((notification) => (
            <Alert
              key={notification.id}
              color={notification.type}
              withCloseButton
              onClose={() => hideNotification(notification.id)}
              mb={8}
            >
              {notification.message}
            </Alert>
          ))}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;
