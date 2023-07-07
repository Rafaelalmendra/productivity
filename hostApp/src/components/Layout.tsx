import React from "react";

// components
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {children}
      <Footer />
    </div>
  );
};

export { Layout };
