import React from "react";

// components
import { Layout } from "host/Layout";

const HomeView = () => {
  return (
    <Layout>
      <div className="mt-4">
        <h1 className="font-bold text-gray-600 text-3xl text-gray-800">
          Lista de tarefas
        </h1>
      </div>
    </Layout>
  );
};

export { HomeView };
