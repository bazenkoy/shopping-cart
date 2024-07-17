import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { Loader } from "@mantine/core";
import { addUser, getUser } from "../api";
import { Nullable, User } from "../types";

const UserContext = createContext<{ user: Nullable<User> }>({ user: null });

export const useUserData = () => {
  const { user } = useContext(UserContext);

  return user as User;
};

const retrieveUser = () => {
  const name = prompt("Enter user name") as string;
  if (!name) {
    return retrieveUser();
  }
  return addUser(name);
};

const UserContextProvide = ({ children }: React.PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<Nullable<User>>(null);

  useEffect(() => {
    getUser()
      .then(setUser)
      .catch((err) => {
        if (err.response.status === 401) {
          return retrieveUser().then(setUser);
        }
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo(() => ({ user }), [user]);

  if (loading) {
    return <Loader />;
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvide;
