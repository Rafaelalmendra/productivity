import React, { useEffect, useState } from "react";

// contexts
import { useAuth } from "host/useAuth";

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

const Header = () => {
  const { user, signOutUser } = useAuth();

  return (
    <header className="w-full absolute">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Productivity
          </span>

          <div className="flex items-center gap-8">
            <p className="text-gray-50 font-semibold">
              {user?.name ? user.name : "Não encontrado"}
            </p>
            <button
              className="text-gray-50 px-8 py-1 rounded border-solid border-gray-500 border-2 hover:bg-gray-500"
              onClick={signOutUser}
            >
              Sair
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { LoginHeader, Header };
