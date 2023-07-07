import React, { useEffect, useState } from "react";

// contexts
import { useAuth } from "../contexts";

type HeaderProps = {
  userName?: string;
};

const LoginHeader = () => {
  return (
    <header className="w-full absolute">
      <nav className="flex items-center justify-center bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Productivity
        </span>
      </nav>
    </header>
  );
};

const Header = ({ userName }: HeaderProps) => {
  return (
    <header className="w-full absolute">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Productivity
          </span>
          <div className="flex items-center lg:order-2">
            <p className="text-gray-50">{userName}</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { LoginHeader, Header };
