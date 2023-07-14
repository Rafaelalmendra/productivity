import React from "react";

// contexts
import useAuth from "host/useAuth";

const HomeView = () => {
  const { user } = useAuth();

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-3xl text-gray-800">Lista de tarefas</h1>

          <div className="flex items-center justify-center py-2 px-4 rounded bg-primary-600 text-white">
            React App
          </div>
        </div>
        <p className="text-gray-700">
          Bem vindo,{" "}
          <span className="font-bold">
            {user?.name ? user?.name : "Usuário não encontrado"}
          </span>
        </p>
      </div>
    </div>
  );
};

export { HomeView };
