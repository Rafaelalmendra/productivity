import React from "react";

// components
import { Layout } from "host/Layout";

// contexts
import { useAuth } from "host/useAuth";

const HomeView = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="mt-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl text-gray-800">Lista de tarefas</h1>
          <p className="text-gray-700">
            Bem vindo, <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export { HomeView };
