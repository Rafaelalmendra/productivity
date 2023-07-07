import React from "react";

// components
import { Layout } from "host/Layout";

// hooks
import { useAuth } from "host/useAuth";

const HomeView = () => {
  const { user } = useAuth();

  console.log("user", user);

  return (
    <Layout user={user}>
      <div className="pt-[400px] text-gray-800">
        <h1>Home</h1>
      </div>
    </Layout>
  );
};

export { HomeView };
