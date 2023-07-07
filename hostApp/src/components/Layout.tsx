import React from "react";

// types
import { UserType } from "../types";

// components
import { Footer, Header, LoginHeader } from "./index";

type LayoutProps = {
  isLogin?: boolean;
  user?: UserType;
  children: React.ReactNode;
};

const Layout = ({ isLogin = false, user, children }: LayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {isLogin ? <LoginHeader /> : <Header userName={user?.name} />}
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
