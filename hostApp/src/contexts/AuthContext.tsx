import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

type User = {
  name: string;
};

type AuthContextType = {
  user: User | undefined;
  signInUser: (name: string) => Promise<void>;
  signOutUser: () => Promise<void>;
};

type AuthContextTypeProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = (props: AuthContextTypeProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  const signInUser = async (name: string) => {
    setUser({ name });
    localStorage.setItem("user", JSON.stringify({ name }));

    navigate("/todo");
  };

  const signOutUser = async () => {
    setUser(undefined);
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!!user) {
      setUser(JSON.parse(user));
      return;
    }

    signOutUser();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

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
