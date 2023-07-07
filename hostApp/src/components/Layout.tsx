import React from "react";

// types
import { UserType } from "../types";

// components
import { Footer, Header, LoginHeader } from "./index";

type LayoutProps = {
  isLogin?: boolean;
  children: React.ReactNode;
};

const Layout = ({ isLogin = false, children }: LayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {isLogin ? <LoginHeader /> : <Header />}
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
