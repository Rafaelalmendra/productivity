import React from "react";
import { useNavigate } from "react-router-dom";

// contexts

const DetailsView = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-3xl text-gray-800">Details page</h1>

        <div
          className="flex w-20 items-center justify-center py-2 px-4 rounded bg-primary-600 text-white cursor-pointer"
          onClick={() => navigate("/product-a")}
        >
          Home
        </div>
      </div>
    </div>
  );
};

export { DetailsView };
