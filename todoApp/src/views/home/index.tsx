import React, { useContext, useEffect, useState } from "react";

// contexts
// import useAuth from "host/useAuth";
import { useUser } from "host/UserAuth";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const { user, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated());
  }, []);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-3xl text-gray-800">Product A</h1>

          <div
            className="flex items-center justify-center py-2 px-4 rounded bg-primary-600 text-white cursor-pointer"
            onClick={() => navigate("/product-a/details")}
          >
            Details
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
