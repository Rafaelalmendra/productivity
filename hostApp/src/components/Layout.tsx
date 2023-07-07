import React from "react";

// components
import { Footer, Header, Sidebar } from "./index";

type LayoutProps = {
  isLogin?: boolean;
  children: React.ReactNode;
};

const Layout = ({ isLogin = false, children }: LayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-row gap-8">
      {isLogin && <Header />}
      {!isLogin && (
        <div className="w-2/12 h-[100vh]">
          <Sidebar />
        </div>
      )}

      <div className="w-full h-full">{children}</div>

      <Footer />
    </div>
  );
};

export { Layout };
