import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// types
import { UserType } from "../types";

type AuthContextType = {
  user: UserType | undefined;
  signInUser: (name: string) => Promise<void>;
  signOutUser: () => Promise<void>;
};

type AuthContextTypeProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = (props: AuthContextTypeProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const localStorageUser = localStorage.getItem("user");

    if (!localStorageUser) {
      signOutUser();
      return;
    }

    setUser(JSON.parse(localStorageUser));
  }, []);

  const signInUser = async (name: string) => {
    const id = uuidv4();

    setUser({ name, id });
    localStorage.setItem("user", JSON.stringify({ name, id }));

    navigate("/todo");
  };

  const signOutUser = async () => {
    setUser(undefined);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, signInUser, signOutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthContextProvider, useAuth };
